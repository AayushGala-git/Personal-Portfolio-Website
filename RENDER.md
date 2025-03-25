# Deploying on Render

This guide explains how to deploy this Angular portfolio application on Render.

## Method 1: Manual Deployment

1. Sign up or log in to [Render](https://render.com/)
2. From the dashboard, click **New** and select **Static Site**
3. Connect your GitHub repository
4. Fill in the deployment details:
   - **Name**: Your site name (e.g., "portfolio")
   - **Branch**: main (or your preferred branch)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist/dartegnians-portfolio`
5. Click **Create Static Site**

Your site will be deployed automatically and available at a Render URL. You can configure a custom domain in the site settings.

## Method 2: Using render.yaml (Blueprint)

This repository includes a `render.yaml` file for easy deployment:

1. Sign up or log in to [Render](https://render.com/)
2. From the dashboard, click **New** and select **Blueprint**
3. Connect and select this repository
4. Render will automatically detect the configuration and deploy your site

## Handling Client-Side Routing

Angular uses client-side routing, which requires special configuration for proper functioning on Render:

- When deployed, the application will have a route rewrite configured to direct all paths to `index.html`
- This allows Angular's router to handle navigation properly

## Troubleshooting

If your site displays a blank page or "Not Found" errors:

1. Check that the publish directory matches exactly: `dist/dartegnians-portfolio`
2. Verify that client-side routing is properly configured in the Render dashboard
3. Inspect the deployed site using browser dev tools for any console errors

For more help, see [Render's documentation on deploying static sites](https://render.com/docs/static-sites). 