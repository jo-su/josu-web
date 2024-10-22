const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    // This is required to support PostHog trailing slash API requests
    skipTrailingSlashRedirect: true, 
  }
 
module.exports = withNextIntl(nextConfig);