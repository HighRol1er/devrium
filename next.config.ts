import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      'react-markdown',
      'react-syntax-highlighter',
      'remark-gfm',
    ],
  },
};

// ⚠ Webpack is configured while Turbopack is not, which may cause problems.
// ⚠ See instructions if you need to configure Turbopack:
//  https://nextjs.org/docs/app/api-reference/next-config-js/turbo

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
})(nextConfig);

// export default nextConfig;
