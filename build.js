#!/usr/bin/env node
/**
 * Build wrapper script that sets environment variables
 * without requiring cross-env or platform-specific commands
 */

const { execSync } = require('child_process')

// Set environment variables
process.env.INIT_CWD = process.cwd()
process.env.NODE_OPTIONS = '--experimental-json-modules'

try {
  console.log('Running: next build')
  // Use shell command - works on both Windows and Linux
  execSync('npx next build', {
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
  process.exit(1)
}
