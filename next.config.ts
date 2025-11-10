// next.config.ts
import type { NextConfig } from 'next';

// 关键：请将 'YourRepoName' 替换为您的 GitHub 仓库名称
const repoName = 'YourRepoName';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  // 1. 静态导出：生成 'out' 目录用于 GitHub Pages
  output: 'export',

  // 2. 路径前缀：仅在 GitHub Actions 部署时启用
  basePath: isGithubActions ? `/${repoName}` : '',
  assetPrefix: isGithubActions ? `/${repoName}/` : '',

  // 3. 禁用图片优化：GitHub Pages 不支持 Next.js 动态图片优化
  images: {
    unoptimized: true,
  },

  // 如需其它配置，请继续添加到此对象中
};

export default nextConfig;
