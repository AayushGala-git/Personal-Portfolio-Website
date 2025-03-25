#!/bin/bash

# Build the Angular application
echo "Building Angular application..."
npm run build

# Display build output directory
echo "Build completed. Files are in dist/dartegnians-portfolio"
echo "To deploy on Render, use this directory path for the 'Publish directory' field: dist/dartegnians-portfolio" 