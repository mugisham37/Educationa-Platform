#!/usr/bin/env node

/**
 * Update Sitemap Script
 * 
 * This script updates the sitemap.xml file with the correct domain after deployment.
 * 
 * Usage:
 *   node update-sitemap.js <your-vercel-domain>
 * 
 * Example:
 *   node update-sitemap.js ymgrad.vercel.app
 */

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

// Get the domain from command line arguments
const newDomain = process.argv[2];

if (!newDomain) {
  console.error(`${colors.red}${colors.bold}Error:${colors.reset} Please provide a domain name.`);
  console.log(`${colors.yellow}Usage: node update-sitemap.js <your-vercel-domain>${colors.reset}`);
  console.log(`${colors.yellow}Example: node update-sitemap.js ymgrad.vercel.app${colors.reset}`);
  process.exit(1);
}

// Validate domain format
if (!/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(newDomain) && 
    !/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.vercel\.app$/.test(newDomain)) {
  console.error(`${colors.red}${colors.bold}Error:${colors.reset} Invalid domain format.`);
  console.log(`${colors.yellow}Please provide a valid domain name (e.g., example.com or project.vercel.app)${colors.reset}`);
  process.exit(1);
}

// Path to the sitemap.xml file
const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');

// Update sitemap.xml
try {
  console.log(`${colors.blue}Updating sitemap.xml with domain: ${colors.bold}${newDomain}${colors.reset}`);
  
  if (!fs.existsSync(sitemapPath)) {
    console.error(`${colors.red}${colors.bold}Error:${colors.reset} sitemap.xml not found at ${sitemapPath}`);
    process.exit(1);
  }
  
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
  // Replace all occurrences of the placeholder domain with the new domain
  const updatedSitemapContent = sitemapContent.replace(
    /https:\/\/your-vercel-domain\.vercel\.app/g, 
    `https://${newDomain}`
  );
  
  fs.writeFileSync(sitemapPath, updatedSitemapContent);
  console.log(`${colors.green}✓ sitemap.xml updated successfully.${colors.reset}`);
} catch (error) {
  console.error(`${colors.red}${colors.bold}Error updating sitemap.xml:${colors.reset} ${error.message}`);
  process.exit(1);
}

// Update robots.txt
try {
  console.log(`${colors.blue}Updating robots.txt with domain: ${colors.bold}${newDomain}${colors.reset}`);
  
  if (!fs.existsSync(robotsPath)) {
    console.error(`${colors.red}${colors.bold}Error:${colors.reset} robots.txt not found at ${robotsPath}`);
    process.exit(1);
  }
  
  let robotsContent = fs.readFileSync(robotsPath, 'utf8');
  
  // Replace the sitemap URL in robots.txt
  const updatedRobotsContent = robotsContent.replace(
    /Sitemap: https:\/\/your-vercel-domain\.vercel\.app\/sitemap\.xml/,
    `Sitemap: https://${newDomain}/sitemap.xml`
  );
  
  fs.writeFileSync(robotsPath, updatedRobotsContent);
  console.log(`${colors.green}✓ robots.txt updated successfully.${colors.reset}`);
} catch (error) {
  console.error(`${colors.red}${colors.bold}Error updating robots.txt:${colors.reset} ${error.message}`);
  process.exit(1);
}

console.log(`${colors.green}${colors.bold}=== Update Complete! ====${colors.reset}`);
console.log(`${colors.green}Your sitemap.xml and robots.txt files now use: ${colors.bold}https://${newDomain}${colors.reset}`);
