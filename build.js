#!/usr/bin/env node
const { execSync } = require('child_process')
const path = require('path')

// 设置环境变量
process.env.INIT_CWD = process.cwd()
// 为了支持 postbuild.mjs 里的 import
process.env.NODE_OPTIONS = '--experimental-json-modules'

// 关键修复：
// 直接定位到 node_modules/next 包内部的 CLI 脚本文件
// 这样就不依赖于系统 PATH 或 .bin 文件夹的链接
const nextCli = path.join(process.cwd(), 'node_modules', 'next', 'dist', 'bin', 'next')

try {
  console.log(`Running: node ${nextCli} build`)

  // 直接使用 node 执行 Next.js 的 CLI 脚本
  execSync(`node "${nextCli}" build`, {
    stdio: 'inherit',
    env: process.env,
  })

  console.log('Running: node ./scripts/postbuild.mjs')
  execSync('node ./scripts/postbuild.mjs', {
    stdio: 'inherit',
    env: process.env,
  })

  console.log('Build completed successfully!')
} catch (error) {
  console.error('Build failed')
  // 打印错误详情以便调试
  console.error(error)
  process.exit(1)
}
