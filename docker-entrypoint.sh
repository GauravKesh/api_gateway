#!/bin/sh
set -e

echo "Linking PM2 with PM2.io..."
pm2 link $PM2_PUBLIC_KEY $PM2_SECRET_KEY api-gateway

echo "Starting apps with PM2 Runtime..."
exec pm2-runtime ecosystem.config.cjs
