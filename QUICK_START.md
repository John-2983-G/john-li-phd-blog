# 🚀 快速开始：自定义您的个性化功能

## ⚡ 5分钟快速上手

### 第 1 步：打开 Banner 配置文件

**路径：** `components/Banner.tsx`

找到这一段（大约在 22 行）：

```typescript
const bannerConfig: BannerConfig = {
  show: true,
  title: "Welcome to John Li's Personal Space",
  description: "PhD Candidate in Finance | ...",
  backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  textColor: 'text-white',
  links: [...]
}
```

---

### 第 2 步：修改标题和描述

**示例 - 改为简约风格：**

```typescript
title: "John Li",
description: "PhD in Finance | Climate Economics Researcher",
```

**示例 - 改为热情风格：**

```typescript
title: "Welcome! 👋",
description: "Exploring the intersection of climate & finance",
```

---

### 第 3 步：改变背景颜色

#### 最简单的方法 - 使用预设渐变

**深蓝色（学术风）：**

```typescript
backgroundImage: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
```

**深灰色（专业风）：**

```typescript
backgroundImage: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
```

**绿色（环保风）：**

```typescript
backgroundImage: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
```

**粉红色（创意风）：**

```typescript
backgroundImage: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
```

#### 自定义渐变色

**通用格式：**

```typescript
backgroundImage: 'linear-gradient(135deg, #颜色1 0%, #颜色2 100%)',
```

**常用 16 进制颜色：**

- `#1e40af` - 深蓝
- `#059669` - 深绿
- `#dc2626` - 深红
- `#7c3aed` - 深紫
- `#ea580c` - 深橙

---

### 第 4 步：修改快速链接

找到 `links` 数组：

```typescript
links: [
  { label: 'Latest Research', href: '/blog' },
  { label: 'Data Resources', href: '/projects' },
  { label: 'About Me', href: '/about' },
]
```

**修改为：**

```typescript
links: [
  { label: '📚 Blog', href: '/blog' },
  { label: '📊 Resources', href: '/projects' },
  { label: '👤 About', href: '/about' },
  { label: '💌 Contact', href: '/about' }, // 添加新链接
]
```

---

### 第 5 步：保存并预览

1. **保存文件** - Ctrl+S
2. **网页自动刷新** - 看到 Banner 的变化
3. **调试** - 不满意？重复第 2-4 步

---

## 🎨 进阶自定义 - 导航链接效果

**路径：** `components/Header.tsx` 第 41-42 行

### 改变下划线颜色

当前代码：

```tsx
<span className="from-primary-500 to-primary-600 ... ..."></span>
```

**改为红色：**

```tsx
<span className="from-red-400 to-red-600 ... ..."></span>
```

**改为绿色：**

```tsx
<span className="from-green-400 to-green-600 ... ..."></span>
```

**改为单色（不是渐变）：**

```tsx
<span className="bg-blue-500 ... ..."></span>
```

### 改变动画速度

当前：`duration-300`（300 毫秒）

```tsx
duration - 200 // 更快（200ms）
duration - 500 // 更慢（500ms）
duration - 700 // 非常慢（700ms）
```

---

## ✨ 完整自定义示例

### 示例 1：学术/研究风格

```typescript
// Banner.tsx
const bannerConfig: BannerConfig = {
  show: true,
  title: "Research on Carbon Markets",
  description: "Systematic review of carbon finance in urban transitions",
  backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
  textColor: 'text-slate-50',
  links: [
    { label: 'Publications', href: '/blog' },
    { label: 'Data', href: '/projects' },
    { label: 'CV', href: '/about' },
  ]
}

// Header.tsx - 导航下划线改为蓝色
<span className="from-blue-400 to-blue-600 ..."></span>
```

### 示例 2：专业商务风格

```typescript
// Banner.tsx
const bannerConfig: BannerConfig = {
  show: true,
  title: "John Li",
  description: "PhD Candidate • Royal Holloway, University of London",
  backgroundColor: '#ffffff',
  backgroundImage: undefined,
  textColor: 'text-gray-900',
  links: [
    { label: 'Work', href: '/blog' },
    { label: 'Resources', href: '/projects' },
    { label: 'About', href: '/about' },
  ]
}

// Header.tsx - 导航下划线改为黑色
<span className="bg-gray-900 ..."></span>
```

### 示例 3：个性创意风格

```typescript
// Banner.tsx
const bannerConfig: BannerConfig = {
  show: true,
  title: "✨ Welcome to My World ✨",
  description: "thoughts on finance, climate & innovation",
  backgroundImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  textColor: 'text-white',
  links: [
    { label: '🚀 Latest', href: '/blog' },
    { label: '📊 Data Hub', href: '/projects' },
    { label: '🙋 About Me', href: '/about' },
  ]
}

// Header.tsx - 导航下划线改为粉红
<span className="from-pink-300 to-pink-500 ..."></span>
```

---

## 🎯 常见修改任务

### 任务 1：隐藏 Banner（仅保留导航）

在 `Banner.tsx` 改为：

```typescript
show: false,
```

### 任务 2：改变文字颜色

`textColor` 选项：

- `text-white` - 白色
- `text-gray-100` - 浅灰
- `text-blue-100` - 浅蓝
- `text-purple-200` - 浅紫

### 任务 3：加速或减速动画

在 `Header.tsx` 改 `duration-300`：

```tsx
duration - 100 // 超快
duration - 300 // 标准（推荐）
duration - 500 // 舒适
duration - 1000 // 超慢
```

### 任务 4：加粗或变细下划线

在 `Header.tsx` 改 `h-0.5`：

```tsx
h - 0.5 // 细（2px）- 当前
h - 1 // 中（4px）
h - 1.5 // 粗（6px）
h - 2 // 超粗（8px）
```

---

## 🔍 调试技巧

### 检查是否保存

- Ctrl+S 保存
- 刷新浏览器查看

### 如果没看到变化

- 清除浏览器缓存
- 刷新页面（Ctrl+R 或 Cmd+R）
- 检查是否正确保存

### 如果代码报错

- 检查逗号和括号是否匹配
- 检查字符串是否用引号括起
- 参考原始代码的格式

---

## 📚 参考资源

| 文件                         | 用途           |
| ---------------------------- | -------------- |
| `CUSTOMIZATION_GUIDE.md`     | 详细自定义指南 |
| `VISUAL_EFFECTS_GUIDE.md`    | 效果细节说明   |
| `PERSONALIZATION_SUMMARY.md` | 功能总结       |

---

## ✅ 检查清单

- [ ] 修改了 Banner 标题
- [ ] 改变了背景颜色
- [ ] 自定义了快速链接
- [ ] 预览页面看起来不错
- [ ] 修改了导航效果（可选）

---

## 💡 提示

- **提示 1：** 先从改标题开始，最简单
- **提示 2：** 保存后自动刷新，无需手动重启服务器
- **提示 3：** 16 进制颜色在线工具：https://htmlcolorcodes.com/
- **提示 4：** 渐变方向可改 `135deg`：`45deg`（↗）、`90deg`（↓）、`0deg`（→）

---

**祝您个性化成功！有问题？**
参考对应的 `.md` 文件获取更详细的说明。

🎉 **现在就开始自定义吧！**
