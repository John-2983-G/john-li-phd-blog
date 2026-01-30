# 🖼️ Logo 替换指南

## ✅ 已完成

白色装饰圆形已删除！Banner 现在更清爽了。

---

## 📍 Logo 位置

**当前 Logo 文件：** `data/logo.svg`

**在代码中的使用：**

- **文件：** `components/Header.tsx`
- **第 3 行：** `import Logo from '@/data/logo.svg'`

---

## 🔄 如何替换 Logo

### 方式 1：替换 SVG 文件（推荐）

**步骤 1：准备您的 logo**

- 格式：`.svg` 文件（矢量格式，质量最好）
- 大小：任意，会自动缩放
- 位置：需要放在 `data/` 文件夹中

**步骤 2：替换文件**

```
1. 重命名您的 logo 为 logo.svg
2. 复制到：data/logo.svg
3. 覆盖原文件
```

**步骤 3：完成！**

- 保存后自动刷新
- 新 logo 会显示在页面顶部

### 方式 2：使用 PNG/JPG 文件

如果您只有 PNG 或 JPG 格式的 logo：

**步骤 1：放置图片**

```
1. 将图片放在：public/static/images/
2. 命名为：logo.png（或 logo.jpg）
```

**步骤 2：修改 Header.tsx**

```tsx
// 改这一行：
import Logo from '@/data/logo.svg'

// 改成：
import Image from 'next/image'

// 然后在组件中改成：
;<div className="mr-3">
  <Image src="/static/images/logo.png" alt="Logo" width={50} height={50} />
</div>
```

---

## 🎯 快速替换步骤

### 如果您有 SVG 文件

1. **准备文件**

   ```
   您的logo文件 → 重命名为 logo.svg
   ```

2. **复制文件**

   ```
   粘贴到：data/logo.svg
   ```

3. **完成！**
   ```
   刷新浏览器（Ctrl+R）
   ```

### 如果您有 PNG/JPG 文件

1. **保存文件**

   ```
   复制到：public/static/images/logo.png
   ```

2. **修改代码**

   ```
   打开：components/Header.tsx
   改第 3 行和相关代码（见上面的代码例子）
   ```

3. **完成！**
   ```
   保存并刷新
   ```

---

## 📐 Logo 大小建议

- **宽度：** 50-100 px
- **高度：** 50-100 px
- **宽高比：** 1:1 或 2:1（根据您的 logo）
- **格式：** SVG 最佳，PNG 次之

---

## 🎨 Logo 样式优化（可选）

如果 logo 显示太大或太小，可以在 Header.tsx 调整：

```tsx
{
  /* 调整这个 div 的大小 */
}
;<div className="mr-3">
  <Logo />
</div>

{
  /* 可以改成带尺寸的 div */
}
;<div className="mr-3 h-12 w-12">
  <Logo />
</div>
```

---

## ❓ 常见问题

**Q: SVG 文件怎么获得？**
A:

- 从 Figma 导出（推荐）
- 使用在线转换工具转换 PNG → SVG
- 或用 AI 工具生成 SVG

**Q: Logo 显示不了怎么办？**
A:

- 检查文件是否在 `data/` 目录
- 检查文件名是否正确（logo.svg）
- 清除浏览器缓存并刷新
- 检查浏览器控制台是否有错误（F12）

**Q: Logo 太小或太大？**
A:

- SVG：在 CSS 中调整大小，如上所示
- PNG：在 Image 标签中改 width 和 height

**Q: 可以使用 PNG 吗？**
A: 可以，但需要修改 Header.tsx（见方式 2）

---

## 📝 建议

1. **使用 SVG** - 文件最小，缩放完美
2. **简单清晰** - Logo 在导航栏中显示，要清晰易认
3. **深浅都适配** - 确保在浅色和深色背景下都好看
4. **正方形最佳** - 1:1 宽高比效果最好

---

## 🔄 下一步

选择您的替换方式：

- **有 SVG？** → 直接复制到 `data/logo.svg`（最快！）
- **有 PNG/JPG？** → 按方式 2 修改（需要改代码）
- **都没有？** → 使用在线工具或 AI 生成 logo

---

**需要帮助？** 参考上面的详细步骤或查看代码注释！
