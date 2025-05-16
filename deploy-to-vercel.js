#!/usr/bin/env node

/**
 * Complete Vercel Deployment Script
 * 
 * This script runs all the necessary steps to deploy your Next.js project to Vercel.
 * It combines the test-build, deploy, and update-sitemap scripts into a single command.
 * 
 * Usage:
 *   node deploy-to-vercel.js [--prod] [domain]
 * 
 * Options:
 *   --prod    Deploy to production
 *   domain    Your Vercel domain (e.g., your-project.vercel.app or custom domain)
 * 
 * Example:
 *   node deploy-to-vercel.js --prod ymgrad.vercel.app
 */

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
  bold: '\x1b[1m'
};

// Parse command line arguments
const args = process.argv.slice(2);
const isProd = args.includes('--prod');
const domainIndex = args.findIndex(arg => !arg.startsWith('--'));
const domain = domainIndex !== -1 ? args[domainIndex] : null;

console.log(`${colors.blue}${colors.bold}=== Next.js Vercel Deployment ====${colors.reset}\n`);
console.log(`${colors.yellow}This script will run all necessary steps to deploy your Next.js project to Vercel.${colors.reset}\n`);

// Step 1: Run the test build
console.log(`${colors.blue}Step 1: Testing the build...${colors.reset}`);
try {
  execSync('npm run test-build', { stdio: 'inherit' });
  console.log(`${colors.green}✓ Build test passed.${colors.reset}\n`);
} catch (error) {
  console.error(`${colors.red}✗ Build test failed. Fix the issues before deploying.${colors.reset}\n`);
  process.exit(1);
}

// Step 2: Deploy to Vercel
console.log(`${colors.blue}Step 2: Deploying to Vercel...${colors.reset}`);
try {
  const deployCommand = isProd ? 'npm run deploy:prod' : 'npm run deploy';
  execSync(deployCommand, { stdio: 'inherit' });
  console.log(`${colors.green}✓ Deployment completed successfully.${colors.reset}\n`);
} catch (error) {
  console.error(`${colors.red}✗ Deployment failed. Check the error message above.${colors.reset}\n`);
  process.exit(1);
}

// Step 3: Update sitemap and robots.txt if domain is provided
if (domain) {
  console.log(`${colors.blue}Step 3: Updating sitemap.xml and robots.txt with domain: ${domain}...${colors.reset}`);
  try {
    execSync(`npm run update-sitemap ${domain}`, { stdio: 'inherit' });
    console.log(`${colors.green}✓ Sitemap and robots.txt updated successfully.${colors.reset}\n`);
  } catch (error) {
    console.error(`${colors.red}✗ Failed to update sitemap and robots.txt. Check the error message above.${colors.reset}\n`);
    // Continue despite error
  }
} else {
  console.log(`${colors.yellow}Step 3: Skipping sitemap update. No domain provided.${colors.reset}`);
  console.log(`${colors.yellow}You can update the sitemap later with: npm run update-sitemap your-domain.com${colors.reset}\n`);
}

// Final success message
console.log(`${colors.green}${colors.bold}=== Deployment Process Complete! ====${colors.reset}`);
console.log(`${colors.green}Your Next.js project has been deployed to Vercel.${colors.reset}`);

if (!domain) {
  console.log(`\n${colors.yellow}Don't forget to update your sitemap and robots.txt with your actual domain:${colors.reset}`);
  console.log(`${colors.yellow}npm run update-sitemap your-project.vercel.app${colors.reset}`);
}

console.log(`\n${colors.blue}Next steps:${colors.reset}`);
console.log(`1. Check your project at your Vercel URL`);
console.log(`2. Set up a custom domain (optional)`);
console.log(`3. Configure environment variables if needed`);
console.log(`4. Enable Vercel Analytics for monitoring`);

rl.close();
