# Vercel Deployment Checklist

Use this checklist to ensure your Next.js project is ready for optimal deployment on Vercel.

## Pre-Deployment Checks

- [ ] All code changes are committed and pushed to your repository
- [ ] Project builds successfully locally (`npm run build`)
- [ ] No console errors when running locally (`npm run dev`)
- [ ] All images and assets are properly referenced
- [ ] Responsive design works on different screen sizes
- [ ] All links work correctly

## Configuration Checks

- [ ] next.config.mjs is optimized for Vercel (✅ already configured)
- [ ] vercel.json is present with optimized settings (✅ already configured)
- [ ] Required environment variables are documented in .env.example (✅ already configured)
- [ ] package.json has correct dependencies and scripts (✅ already configured)

## Deployment Process

- [ ] Run the test build script to verify your project builds correctly:
  ```bash
  npm run test-build
  ```
- [ ] Choose your deployment method:
  - [ ] Vercel Dashboard (recommended for first deployment)
  - [ ] Vercel CLI using our deploy script (`npm run deploy`)
- [ ] Connect your Git repository to Vercel (if using Dashboard)
- [ ] Configure project settings in Vercel
- [ ] Deploy the project

## Post-Deployment Checks

- [ ] Website loads correctly at the Vercel URL
- [ ] All pages render properly
- [ ] Images and assets load correctly
- [ ] No console errors in browser developer tools
- [ ] Forms and interactive elements work as expected
- [ ] Site performance is acceptable (check Vercel Analytics)
- [ ] Update sitemap.xml and robots.txt with your actual domain:
  ```bash
  npm run update-sitemap your-project-name.vercel.app
  ```

## Optional Optimizations

- [ ] Set up a custom domain
- [ ] Configure additional environment variables if needed
- [ ] Enable Vercel Analytics
- [ ] Set up monitoring and alerts
- [ ] Configure preview deployments for pull requests

## Troubleshooting Common Issues

### Build Failures
- Check build logs in Vercel dashboard
- Ensure all dependencies are correctly installed
- Verify that the build command is correct

### Missing Environment Variables
- Add required environment variables in Vercel project settings
- Make sure they match the format in .env.example

### Image Optimization Issues
- Verify that images are properly configured in next.config.mjs
- Check that image domains are correctly set

### Performance Issues
- Use Vercel Analytics to identify bottlenecks
- Consider implementing ISR (Incremental Static Regeneration) for dynamic pages
- Optimize image sizes and formats

## Deployment Commands

### All-in-One Deployment

```bash
# Deploy to preview environment
npm run deploy-to-vercel

# Deploy to production
npm run deploy-to-vercel:prod

# With domain update (updates sitemap and robots.txt)
npm run deploy-to-vercel:prod your-project.vercel.app
```

### Step-by-Step Deployment

```bash
# Test the build
npm run test-build

# Deploy to preview environment
npm run deploy

# Deploy to production
npm run deploy:prod

# Update sitemap and robots.txt
npm run update-sitemap your-domain.com
```

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
