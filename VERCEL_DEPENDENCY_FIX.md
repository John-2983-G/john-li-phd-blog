# Vercel 部署 - npm 依赖问题解决方案

## 问题描述

构建失败，错误信息：

```
Command failed with exit code 127: npm run build
/bin/sh: line 1: next: command not found
```

这表示 `next` 命令找不到，通常由于 `node_modules` 安装不完整。

---

## ✅ 解决方案

### 问题诊断

1. `.bin/next` 软链接缺失
2. `node_modules` 目录存在但依赖未完全安装
3. 标准 `npm install` 可能无法完全恢复依赖关系

### 修复步骤

#### 1. 删除并重新安装

```bash
# 删除 node_modules 和缓存
rm -r node_modules -Force
npm cache clean --force

# 使用 npm ci（Clean Install）重新安装
npm ci
```

#### 2. 为什么 `npm ci` 比 `npm install` 更好？

- **npm ci** 基于 `package-lock.json` 安装精确版本
- **npm install** 可能更新到 package.json 允许的最新版本
- **npm ci** 在 CI/CD 环境（包括 Vercel）中更可靠
- **npm ci** 能更好地恢复损坏的 node_modules

#### 3. 重建 .bin 链接

```bash
cd "E:\My website"
npm ci
```

### 预期结果

```
added 1080 packages, and audited 1081 packages in 44s

428 packages are looking for funding
  run `npm fund` for details

6 vulnerabilities (4 moderate, 2 high)
```

✅ 所有 1080 个包成功安装

---

## 🏗️ Vercel 环境注意事项

### 在 Vercel 上，自动执行的步骤：

1. **Install Command** (默认):

   ```bash
   npm ci
   ```

   - Vercel 使用 `npm ci` 而不是 `npm install`
   - 这确保了与 package-lock.json 的一致性

2. **Build Command** (默认):

   ```bash
   npm run build
   ```

   - 执行你的 package.json 中定义的构建脚本

3. **Output Directory**:
   ```
   .next
   ```

   - 这是你 vercel.json 中配置的输出目录

### 如果 Vercel 构建失败

1. **检查 Build Logs**:
   - 项目 → Deployments → 点击失败的部署 → View Build Logs

2. **常见原因**:
   - ❌ 缺失的环境变量
   - ❌ Git 子模块问题（已禁用：GIT_SUBMODULE_STRATEGY=none）
   - ❌ 依赖版本冲突
   - ❌ 内存不足（Vercel Functions 限制）

3. **调试步骤**:
   ```bash
   # 本地测试 Vercel 流程
   rm -r node_modules .next
   npm ci
   npm run build
   npm run serve
   ```

---

## 📊 构建成功标志

```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (28/28)
✓ Collecting build traces
✓ Finalizing page optimization

Route (app)                                          Size  First Load JS
├ ○ /                                             1.13 kB         105 kB
├ ○ /_not-found                                     145 B         101 kB
├ ○ /about                                          496 B         106 kB
├ ƒ /api/newsletter                                 145 B         101 kB
├ ○ /blog                                           137 B         110 kB
├ ● /blog/[...slug]                                4.3 kB         113 kB
├ ○ /projects                                       184 B         109 kB
├ ○ /tags                                           172 B         104 kB
└ ● /tags/[tag]                                     137 B         110 kB

+ First Load JS shared by all                      101 kB

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand

RSS feed generated...
```

---

## 🚀 立即部署

现在你可以安全地将代码推送到 Vercel：

```bash
# 确保本地构建成功
npm run build

# 推送到 GitHub
git add .
git commit -m "fix: Rebuild node_modules for consistent Vercel deployment"
git push origin main
```

---

## ⚠️ 重要提示

### 对于 Windows 用户

- Contentlayer 在 Windows 上可能显示警告（在 Vercel/Linux 上不会出现）
- 这不影响构建或部署

### package-lock.json

- ✅ **必须** 提交到 Git
- ✅ Vercel 使用它来确保一致的依赖版本
- ✅ 防止依赖版本漂移问题

### npm 版本

- 项目要求: npm@10
- Vercel 支持: ✅

---

## 📝 总结

| 步骤              | 命令                      | 状态       |
| ----------------- | ------------------------- | ---------- |
| 清理缓存          | `npm cache clean --force` | ✅         |
| 删除 node_modules | `rm -r node_modules`      | ✅         |
| 重新安装依赖      | `npm ci`                  | ✅ 1080 包 |
| 本地构建测试      | `npm run build`           | ✅ 28 页   |
| 推送到 GitHub     | `git push origin main`    | ⏳ 待执行  |
| Vercel 部署       | Vercel Dashboard          | ⏳ 待执行  |

**你的项目现在已准备好部署！** 🎉
