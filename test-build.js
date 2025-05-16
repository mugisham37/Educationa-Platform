#!/usr/bin/env node

/**
 * Test Build Script
 * 
 * This script tests the build process locally before deploying to Vercel.
 * It helps catch any build errors early in the development process.
 * 
 * Usage:
 *   node test-build.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
  bold: '\x1b[1m'
};

console.log(`${colors.blue}${colors.bold}=== Next.js Build Test ====${colors.reset}\n`);
console.log(`${colors.yellow}This script will test your Next.js build process to catch any issues before deploying to Vercel.${colors.reset}\n`);

// Step 1: Check if .next directory exists and remove it
console.log(`${colors.blue}Step 1: Cleaning previous build artifacts...${colors.reset}`);
const nextDir = path.join(process.cwd(), '.next');
if (fs.existsSync(nextDir)) {
  try {
    console.log('Removing existing .next directory...');
    fs.rmSync(nextDir, { recursive: true, force: true });
    console.log(`${colors.green}✓ Previous build artifacts cleaned successfully.${colors.reset}\n`);
  } catch (error) {
    console.error(`${colors.red}✗ Failed to remove .next directory: ${error.message}${colors.reset}\n`);
    process.exit(1);
  }
} else {
  console.log(`${colors.green}✓ No previous build artifacts found.${colors.reset}\n`);
}

// Step 2: Run lint
console.log(`${colors.blue}Step 2: Running linter...${colors.reset}`);
try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log(`${colors.green}✓ Linting passed.${colors.reset}\n`);
} catch (error) {
  console.error(`${colors.red}✗ Linting failed. Fix the issues before deploying.${colors.reset}\n`);
  process.exit(1);
}

// Step 3: Run build
console.log(`${colors.blue}Step 3: Building the project...${colors.reset}`);
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log(`${colors.green}✓ Build completed successfully.${colors.reset}\n`);
} catch (error) {
  console.error(`${colors.red}✗ Build failed. Fix the issues before deploying.${colors.reset}\n`);
  process.exit(1);
}

// Step 4: Check build output
console.log(`${colors.blue}Step 4: Verifying build output...${colors.reset}`);
if (fs.existsSync(nextDir)) {
  try {
    const buildFiles = fs.readdirSync(nextDir);
    if (buildFiles.length > 0) {
      console.log(`${colors.green}✓ Build output verified. Found ${buildFiles.length} files/directories in .next folder.${colors.reset}\n`);
    } else {
      console.error(`${colors.red}✗ Build output appears empty. Check for issues.${colors.reset}\n`);
      process.exit(1);
    }
  } catch (error) {
    console.error(`${colors.red}✗ Failed to verify build output: ${error.message}${colors.reset}\n`);
    process.exit(1);
  }
} else {
  console.error(`${colors.red}✗ Build output directory (.next) not found. Build may have failed.${colors.reset}\n`);
  process.exit(1);
}

// Final success message
console.log(`${colors.green}${colors.bold}=== Build Test Successful! ====${colors.reset}`);
console.log(`${colors.green}Your project is ready for deployment to Vercel.${colors.reset}`);
console.log(`${colors.blue}Run one of the following commands to deploy:${colors.reset}`);
console.log(`  - ${colors.yellow}npm run deploy${colors.reset} (for preview deployment)`);
console.log(`  - ${colors.yellow}npm run deploy:prod${colors.reset} (for production deployment)`);
