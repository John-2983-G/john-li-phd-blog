#!/usr/bin/env node
/**
 * Build wrapper script that sets environment variables
 * without requiring cross-env or platform-specific commands
 */

// Set environment variables before requiring anything
process.env.INIT_CWD = process.cwd()
process.env.NODE_OPTIONS = '--experimental-json-modules'

// Set up process.argv for next CLI
process.argv = [process.execPath, 'next', 'build']

try {
  // Direct require and run next CLI
  console.log('Running: next build')
  require('next/dist/bin/next')
} catch (error) {
  console.error('Build failed:', error.message)
  process.exit(1)
}
