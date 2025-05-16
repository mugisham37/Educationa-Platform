#!/usr/bin/env node

/**
 * Deployment script for Vercel
 * 
 * This script helps deploy the project to Vercel using the Vercel CLI.
 * It provides options for production or preview deployments.
 * 
 * Usage:
 *   node deploy.js [--prod]
 * 
 * Options:
 *   --prod    Deploy to production
 */

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Check if Vercel CLI is installed
try {
  execSync('vercel --version', { stdio: 'ignore' });
} catch (error) {
  console.log('\x1b[33m%s\x1b[0m', 'Vercel CLI not found. Installing...');
  try {
    execSync('npm install -g vercel', { stdio: 'inherit' });
    console.log('\x1b[32m%s\x1b[0m', 'Vercel CLI installed successfully!');
  } catch (installError) {
    console.error('\x1b[31m%s\x1b[0m', 'Failed to install Vercel CLI. Please install it manually with: npm install -g vercel');
    process.exit(1);
  }
}

// Check if user is logged in to Vercel
try {
  execSync('vercel whoami', { stdio: 'ignore' });
} catch (error) {
  console.log('\x1b[33m%s\x1b[0m', 'You are not logged in to Vercel. Please log in:');
  try {
    execSync('vercel login', { stdio: 'inherit' });
  } catch (loginError) {
    console.error('\x1b[31m%s\x1b[0m', 'Failed to log in to Vercel. Please try again.');
    process.exit(1);
  }
}

// Determine if this is a production deployment
const isProd = process.argv.includes('--prod');

// Ask for confirmation
rl.question(`You are about to deploy to ${isProd ? 'PRODUCTION' : 'preview environment'}. Continue? (y/n) `, (answer) => {
  if (answer.toLowerCase() !== 'y') {
    console.log('\x1b[33m%s\x1b[0m', 'Deployment cancelled.');
    rl.close();
    return;
  }

  console.log('\x1b[36m%s\x1b[0m', `Starting ${isProd ? 'production' : 'preview'} deployment...`);
  
  try {
    // Run the deployment command
    const command = isProd ? 'vercel --prod' : 'vercel';
    execSync(command, { stdio: 'inherit' });
    
    console.log('\x1b[32m%s\x1b[0m', `\n✅ Deployment to ${isProd ? 'production' : 'preview environment'} completed successfully!`);
    
    if (!isProd) {
      console.log('\x1b[36m%s\x1b[0m', '\nTo deploy to production, run: node deploy.js --prod');
    }
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', '\n❌ Deployment failed. Please check the error message above.');
  }
  
  rl.close();
});
