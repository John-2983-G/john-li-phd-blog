# Vercel 部署检查清单

## ✅ 前置条件检查

- [x] Next.js 版本 15.2.8（最新稳定版）
- [x] Node.js 版本管理器已配置（npm@10）
- [x] TypeScript 类型检查通过
- [x] 所有依赖版本兼容
- [x] 构建成功（28 页生成）
- [x] 缺失的组件文件已补充

## 🔧 代码问题修复

- [x] `my-personal-site/components/Link.tsx` - 已添加
- [x] `my-personal-site/components/MobileNav.tsx` - 已添加
- [x] `my-personal-site/components/ThemeSwitch.tsx` - 已添加
- [x] `my-personal-site/components/SearchButton.tsx` - 已添加

## 📋 配置验证

### vercel.json

- [x] buildCommand: "npm run build"
- [x] outputDirectory: ".next"
- [x] API 函数超时: 60 秒
- [x] 环境变量配置: GIT_SUBMODULE_STRATEGY

### next.config.js

- [x] Contentlayer2 集成
- [x] Security Headers 配置
- [x] Image Optimization
- [x] SVG 处理
- [x] ESLint 配置

### tsconfig.json

- [x] TypeScript 严格模式
- [x] 路径别名配置
- [x] 模块分辨率正确

### package.json

- [x] 构建脚本正确
- [x] 依赖版本锁定
- [x] npm 版本指定为 @10

## 🌐 部署前最后检查

在推送到 GitHub 并连接到 Vercel 前，确保：

- [ ] 提交所有更改到 Git

  ```bash
  git add .
  git commit -m "fix: Add missing components for production build"
  git push origin main
  ```

- [ ] 访问 [Vercel Dashboard](https://vercel.com)
- [ ] 创建新项目或导入现有 GitHub 仓库
- [ ] 配置项目设置：
  - Framework: Next.js
  - Build Command: `npm run build`
  - Output Directory: `.next`
  - Install Command: `npm ci`

- [ ] （可选）添加环境变量（如使用 Newsletter API）
- [ ] 部署！🚀

## 📊 预期部署时间

| 阶段     | 时间          |
| -------- | ------------- |
| 检出代码 | ~10 秒        |
| 安装依赖 | ~30-60 秒     |
| 运行构建 | ~60-120 秒    |
| 部署     | ~30 秒        |
| **总计** | **~2-4 分钟** |

## 🎯 成功标志

部署成功后，你将看到：

- ✅ 绿色的部署状态
- ✅ 自动分配的 Vercel URL
- ✅ 所有 28 页都可访问
- ✅ API 路由 `/api/newsletter` 工作正常
- ✅ 无构建错误或警告

## 🆘 故障排除

如果部署失败，检查：

1. **构建日志**: Vercel Dashboard → Deployments → Build Logs
2. **通常的问题**:
   - 缺失的环境变量 → 在 Project Settings 中添加
   - Node.js 版本不匹配 → 检查 .nvmrc 或 package.json 中的 engines
   - 依赖问题 → 运行 `npm ci` 本地测试

## 📞 获取支持

- Vercel 文档: https://vercel.com/docs
- Next.js 文档: https://nextjs.org/docs
- 项目仓库: https://github.com/John-2983-G/john-li-phd-blog

---

**测试状态**: ✅ 通过  
**最后更新**: 2026-01-30  
**可以部署**: 是
