# YMGrad - Educational Platform

This is a Next.js project for an educational platform that helps international students with their global education journey.

## Deployment to Vercel

This project is optimized for deployment on Vercel. Follow these steps to deploy:

### Prerequisites

1. A [Vercel account](https://vercel.com/signup) (you can sign up with GitHub, GitLab, or email)
2. Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

### Deployment Steps

#### Option 1: Deploy from the Vercel Dashboard

1. Log in to your [Vercel dashboard](https://vercel.com/dashboard)
2. Click "Add New..." > "Project"
3. Import your Git repository
4. Vercel will automatically detect that this is a Next.js project
5. Configure your project:
   - Project Name: Choose a name for your project (will be used in the URL)
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: `.` (if your project is in the root of the repository)
   - Build and Output Settings: Leave as default (Vercel will use the settings in vercel.json)
6. Click "Deploy"

#### Option 2: Deploy with Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Log in to Vercel:
   ```bash
   vercel login
   ```

3. Navigate to your project directory and run:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your project
5. For production deployment, use:
   ```bash
   vercel --prod
   ```

### Deployment Configuration

This project includes a `vercel.json` file with optimized settings for Vercel deployment:

- Security headers for better protection
- Caching strategies for static assets
- Global region deployment for better performance

The `next.config.mjs` file has also been optimized for Vercel deployment with:

- Enabled image optimization
- SWC minification for faster builds
- React strict mode
- Security enhancements

### Post-Deployment

After deployment:

1. Update your sitemap and robots.txt with your actual domain:
   ```bash
   npm run update-sitemap your-project-name.vercel.app
   ```
   Or if you have a custom domain:
   ```bash
   npm run update-sitemap yourdomain.com
   ```

2. Set up a custom domain (optional):
   - Go to your project settings in the Vercel dashboard
   - Navigate to "Domains"
   - Add and verify your custom domain

3. Set up environment variables (if needed in the future):
   - Go to your project settings in the Vercel dashboard
   - Navigate to "Environment Variables"
   - Add any required environment variables

4. Monitor your deployment:
   - Vercel provides analytics, logs, and performance metrics
   - Check the "Analytics" tab in your project dashboard

### Continuous Deployment

Vercel automatically sets up continuous deployment from your Git repository:

- Pushes to the main branch trigger production deployments
- Pull requests create preview deployments for testing

## Development

To run the development server locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Testing the Build

Before deploying to Vercel, you can test the build process locally to catch any issues:

```bash
npm run test-build
```

This script will:
1. Clean previous build artifacts
2. Run the linter
3. Build the project
4. Verify the build output

## Deployment Process

### Option 1: All-in-One Deployment

Use our all-in-one deployment script that handles testing, deployment, and sitemap updates:

```bash
# For preview deployment
npm run deploy-to-vercel

# For production deployment
npm run deploy-to-vercel:prod

# With domain update (updates sitemap and robots.txt)
npm run deploy-to-vercel:prod your-project.vercel.app
```

### Option 2: Step-by-Step Deployment

If you prefer more control over the process:

1. **Pre-deployment**: Use the `DEPLOYMENT_CHECKLIST.md` file to ensure your project is ready for deployment
2. **Test the build**: Run `npm run test-build` to verify that your project builds correctly
3. **Deploy**:
   - For preview deployment: `npm run deploy`
   - For production deployment: `npm run deploy:prod`
4. **Update sitemap**: Run `npm run update-sitemap your-domain.com` to update the sitemap and robots.txt

See the `DEPLOYMENT_CHECKLIST.md` file for a comprehensive deployment checklist and troubleshooting tips.
