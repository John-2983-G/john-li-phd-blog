# 个性化功能自定义指南

## 1. 自定义 Banner（顶部横幅）

### 位置

`components/Banner.tsx` 中的 `bannerConfig` 对象

### 配置选项

```typescript
const bannerConfig: BannerConfig = {
  show: true, // 显示/隐藏 banner
  title: 'Your Title', // 主标题
  description: 'Your description', // 描述文字
  backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // 背景（支持渐变）
  backgroundColor: '#667eea', // 纯色背景（如果不使用 backgroundImage）
  textColor: 'text-white', // 文字颜色（Tailwind 类名）
  links: [
    { label: 'Link Text', href: '/link-path' },
    // 添加更多链接...
  ],
}
```

### 自定义背景色示例

**单色背景：**

```typescript
backgroundColor: '#1a202c',
backgroundImage: undefined,
```

**渐变背景：**

```typescript
backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
```

**多色渐变：**

```typescript
backgroundImage: 'linear-gradient(to right, #ff6b6b, #4ecdc4, #45b7d1)',
```

**图片背景：**

```typescript
backgroundImage: 'url("/images/your-image.jpg")',
```

### 调整文字颜色

- `text-white` - 白色文字
- `text-gray-100` - 浅灰色
- `text-blue-900` - 深蓝色
- 其他 Tailwind 颜色类

---

## 2. 导航链接悬停效果

### 位置

`components/Header.tsx` - 导航链接部分

### 效果说明

- 当鼠标悬停在导航链接（Blog, Data Resources, About）时
- 链接文字会改变颜色
- **底部会出现一条渐变色的下划线**，从左到右逐渐展开

### 自定义方式

#### 改变下划线颜色

编辑 Header.tsx 中的这一行：

```tsx
<span className="from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r transition-all duration-300 ease-out group-hover:w-full"></span>
```

**改为单色下划线：**

```tsx
<span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full"></span>
```

**加粗下划线：**

```tsx
h - 0.5 // 改为 h-1（更粗）
```

**改变动画速度：**

```tsx
duration - 300 // 改为 duration-500（更慢）或 duration-200（更快）
```

#### 改变悬停文字颜色

```tsx
className = 'group relative ... hover:text-primary-500 dark:hover:text-primary-400'
// 可改为：hover:text-blue-600 等其他颜色
```

---

## 3. 快速自定义示例

### 示例 1：使用深色主题的 Banner

```typescript
const bannerConfig: BannerConfig = {
  show: true,
  title: 'Welcome to My Research Blog',
  description: 'Exploring sustainable finance and climate economics',
  backgroundImage: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
  textColor: 'text-blue-200',
  links: [
    { label: 'Research Papers', href: '/blog' },
    { label: 'Resources', href: '/projects' },
    { label: 'Contact', href: '/about' },
  ],
}
```

### 示例 2：隐藏 Banner

```typescript
const bannerConfig: BannerConfig = {
  show: false, // 只需改这一行
  // ...其他配置
}
```

### 示例 3：简约风格

```typescript
const bannerConfig: BannerConfig = {
  show: true,
  title: 'John Li',
  description: 'PhD Candidate • Finance • Climate Economics',
  backgroundColor: '#ffffff', // 白色背景
  textColor: 'text-gray-900', // 深灰色文字
  links: [
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ],
}
```

---

## 4. Tailwind 颜色参考

### 常用文字颜色

- `text-white` / `text-gray-100` - 浅色
- `text-gray-900` / `text-black` - 深色
- `text-blue-600` / `text-purple-600` - 带色
- `text-red-500` / `text-green-500` - 鲜艳色

### 常用背景色（十六进制）

- `#ffffff` - 纯白
- `#f3f4f6` - 浅灰
- `#1a202c` - 深灰
- `#667eea` - 蓝紫色
- `#ec4899` - 粉红色

---

## 5. 技术细节

### Banner 组件

- 位置：`components/Banner.tsx`
- 集成：已在 `app/layout.tsx` 中引入
- 支持亮色/暗色主题自动适应

### Header 改进

- 导航链接添加了动画下划线效果
- 使用 CSS 过渡实现平滑动画
- 支持浅色和深色主题

---

## 6. 常见问题

**Q: 如何改变导航下划线的颜色？**
A: 编辑 `Header.tsx` 中的 `from-primary-500` 和 `to-primary-600` 为其他颜色。

**Q: Banner 会影响性能吗？**
A: 不会，Banner 使用 CSS 渐变，性能开销很小。

**Q: 可以在移动设备上隐藏 Banner 吗？**
A: 可以，在 `Banner.tsx` 中的 div 上添加 `hidden sm:block` 类。

---

更多自定义需求，请修改相应的 Tailwind CSS 类名。
