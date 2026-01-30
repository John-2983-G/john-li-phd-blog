#!/usr/bin/env node
/**
 * Build wrapper script that sets environment variables
 * without requiring cross-env or platform-specific commands
 */

const { spawnSync } = require('child_process')
const path = require('path')

// Set environment variables
process.env.INIT_CWD = process.cwd()
process.env.NODE_OPTIONS = '--experimental-json-modules'

// Run next build
console.log('Running: next build')
const build = spawnSync('next', ['build'], {
  stdio: 'inherit',
  shell: true,
})

if (build.status !== 0) {
  console.error('Build failed')
  process.exit(build.status)
}

// Run postbuild script
console.log('Running: node ./scripts/postbuild.mjs')
const postbuild = spawnSync('node', ['./scripts/postbuild.mjs'], {
  stdio: 'inherit',
  shell: true,
})

process.exit(postbuild.status)
