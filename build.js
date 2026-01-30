#!/usr/bin/env node
/**
 * Build wrapper script that sets environment variables
 * without requiring cross-env or platform-specific commands
 */

const { execSync } = require('child_process')
const path = require('path')

// Set environment variables
process.env.INIT_CWD = process.cwd()
process.env.NODE_OPTIONS = '--experimental-json-modules'

// Locate the local next binary
const nextBin = path.join(process.cwd(), 'node_modules', '.bin', 'next')

try {
  console.log('Running: next build')
  // Use the local binary directly to avoid "command not found" errors
  execSync(`"${nextBin}" build`, {
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
