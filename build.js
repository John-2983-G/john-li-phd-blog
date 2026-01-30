#!/usr/bin/env node
/**
 * Build wrapper script that sets environment variables
 * without requiring cross-env or platform-specific commands
 */

const { execFileSync } = require('child_process')
const path = require('path')

// Set environment variables
process.env.INIT_CWD = process.cwd()
process.env.NODE_OPTIONS = '--experimental-json-modules'

try {
  // Run next build using node directly with next CLI
  console.log('Running: next build')
  execFileSync(process.execPath, [require.resolve('next/dist/bin/next')].concat(['build']), {
    stdio: 'inherit',
    cwd: process.cwd(),
  })

  // Run postbuild script
  console.log('Running: node ./scripts/postbuild.mjs')
  execFileSync(process.execPath, ['./scripts/postbuild.mjs'], {
    stdio: 'inherit',
    cwd: process.cwd(),
  })
} catch (error) {
  console.error('Build failed:', error.message)
  process.exit(1)
}
