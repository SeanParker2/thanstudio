// next.config.ts
import type { NextConfig } from 'next';
// 关键：'thanstudio' 是您的仓库名称
const repoName = 'thanstudio';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  // 1. 静态导出：(必须)
  output: 'export',

  // 2. 路径前缀：(修复 404 的核心)
  basePath: isGithubActions ? `/${repoName}` : '',

  // 3. 禁用图片优化：(必须)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
