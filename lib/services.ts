// lib/services.ts

// 1. 定义服务的数据结构
export interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  // --- 这是详情页的新内容 ---
  heroTitle: string;
  heroDescription: string;
  serviceIncludes: string[];
  relatedCases: {
    id: number;
    slug: string;
    title: string;
  }[];
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// 2. 撰写所有服务文案
export const SERVICE_DATA: Service[] = [
  {
    id: 1,
    slug: 'brand-launchpad',
    title: '品牌全案启动 (Brand Launchpad)',
    description: '从策略到执行，为新品牌或重塑品牌提供完整的解决方案。',
    imageSrc: `${basePath}/images/hero-image-2.jpeg`, // 替换为现有占位图：'Mask group.png' 或 'hero-image-2.jpeg'

    // --- 详情页文案 ---
    heroTitle: '品牌全案启动',
    heroDescription:
      '我们帮助品牌从0到1。我们相信一个强大的品牌始于一个清晰的策略和（我们）对细节的无情关注。',
    serviceIncludes: [
      '市场与竞品分析',
      '品牌核心策略与定位',
      '品牌故事与文案撰写',
      '视觉识别 (VI) 系统设计',
      '品牌应用物料设计 (名片、PPT、工牌等)',
      '品牌视觉指南 (Brand Guideline) 撰写',
    ],
    relatedCases: [
      { id: 1, slug: 'byte-style-app', title: '字节范APP品牌形象' },
      { id: 3, slug: 'tomato-writer-app', title: '番茄作家助手APP' },
    ],
  },
  {
    id: 2,
    slug: 'visual-identity',
    title: '视觉识别系统 (Visual Identity)',
    description: '打造独特且一致的视觉语言，包括Logo、字体和色彩系统。',
    imageSrc: `${basePath}/images/Mask group-1.png`, // 替换为现有占位图：'Mask group-1.png'

    // --- 详情页文案 ---
    heroTitle: '视觉识别系统',
    heroDescription:
      '您的视觉识别是您与世界沟通的无声语言。我们确保这种语言是清晰、有力且令人难忘的。',
    serviceIncludes: [
      'Logo 设计与优化',
      '标准字体与辅助图形',
      '核心色彩系统与规范',
      '图像与摄影风格定义',
      'VI 应用规范 (基础与应用)',
    ],
    relatedCases: [
      { id: 2, slug: 'dual-exhibition', title: '双人画展海报' },
      { id: 4, slug: 'xianghai-street', title: '香海园西街' },
    ],
  },
  {
    id: 3,
    slug: 'product-packaging',
    title: '产品与包装 (Product & Packaging)',
    description: '让您的产品在货架上脱颖而出，讲述一个引人入胜的故事。',
    imageSrc: `${basePath}/images/Mask group-8.png`, // 替换为现有占位图：'Mask group-8.png'

    // --- 详情页文案 ---
    heroTitle: '产品与包装',
    heroDescription:
      '包装是品牌与消费者的第一个物理接触点。我们将其设计为一种体验，而不仅仅是一个容器。',
    serviceIncludes: [
      '包装材料与结构研究',
      '包装系列视觉设计',
      '标签、瓶贴与信息布局',
      '系列产品线视觉规划',
      '3D 效果图与打样支持',
    ],
    relatedCases: [
      { id: 8, slug: 'lunch-landscape-water', title: '午餐江山图鉴矿泉水' },
      { id: 13, slug: 'instant-power-packaging', title: '即时引爆力品牌-全动研包装' },
    ],
  },
  {
    id: 4,
    slug: 'digital-experience',
    title: '数字体验设计 (Digital Experience)',
    description: '设计直观、美观的网站和应用程序，连接品牌与用户。',
    imageSrc: `${basePath}/images/Mask group-11.png`, // 替换为现有占位图：'Mask group-11.png'

    // --- 详情页文案 ---
    heroTitle: '数字体验设计',
    heroDescription:
      '我们构建的不只是页面，而是旅程。我们设计无缝的数字体验，将品牌承诺转化为直观的互动。',
    serviceIncludes: [
      '用户体验 (UX) 流程图与线框图',
      '用户界面 (UI) 视觉设计',
      '响应式网站设计',
      '移动应用 (App) 界面设计',
      '交互动效设计',
      '设计系统 (Design System) 构建',
    ],
    relatedCases: [
      { id: 11, slug: 'pingan-bank', title: '平安银行品牌合作' },
      { id: 12, slug: 'call-for-color', title: '呼儿出彩开幕式' },
    ],
  },
];

// 3. 辅助函数
export const getServiceBySlug = (slug: string) => {
  return SERVICE_DATA.find((service) => service.slug === slug);
};