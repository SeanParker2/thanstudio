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
  processSteps: string[];
  pricing?: {
    title: string;
    items: { name: string; price?: string; features: string[] }[];
  };
  faqs?: { question: string; answer: string }[];
  relatedCases: {
    id: number;
    slug: string;
    title: string;
  }[];
}
import { withBasePath } from '@/lib/site';

// 2. 撰写所有服务文案
export const SERVICE_DATA: Service[] = [
  {
    id: 1,
    slug: 'brand-launchpad',
    title: '品牌全案启动 (Brand Launchpad)',
    description: '从策略到执行，为新品牌或重塑品牌提供完整的解决方案。',
    imageSrc: withBasePath('/images/hero-image-2.jpeg'),

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
    processSteps: [
      '沟通目标与约束',
      '调研与策略工作坊',
      '视觉方向探索与确认',
      '系统化设计与交付',
      '品牌指南与培训',
    ],
    pricing: {
      title: '套餐与范围',
      items: [
        { name: '基础版', price: '￥80,000+', features: ['策略简版', 'Logo 与基础 VI', '应用模板'] },
        { name: '标准版', price: '￥150,000+', features: ['完整策略', 'VI 系统', '关键物料'] },
        { name: '旗舰版', price: '￥300,000+', features: ['全案策略', '全套 VI', '品牌指南'] },
      ],
    },
    faqs: [
      { question: '周期多久？', answer: '通常 6–10 周，视范围与反馈轮次而定。' },
      { question: '是否含落地物料？', answer: '标准版及以上包含核心物料与模板。' },
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
    imageSrc: withBasePath('/images/Mask group-1.png'),

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
    processSteps: ['调研与盘点', '标志与核心元素方向', '系统扩展与规范', '应用落地与指南'],
    pricing: {
      title: '建议范围',
      items: [
        { name: 'VI 基础', price: '￥60,000+', features: ['Logo', '色彩/字体', '基础规范'] },
        { name: 'VI 系统', price: '￥120,000+', features: ['完整元素系统', '应用规范', '模板'] },
      ],
    },
    faqs: [{ question: '是否包含 Logo 设计？', answer: '包含，可提供多方向提案与迭代。' }],
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
    imageSrc: withBasePath('/images/Mask group-8.png'),

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
    processSteps: ['竞品/材料研究', '结构与视觉方案', '系列化设计', '打样与调整'],
    pricing: {
      title: '常见范围',
      items: [
        { name: '单品包装', price: '￥40,000+', features: ['结构建议', '正背标设计', '打样支持'] },
        { name: '系列包装', price: '￥100,000+', features: ['系列体系', '多 SKU 设计', '规范'] },
      ],
    },
    faqs: [{ question: '是否提供打样？', answer: '提供打样支持与供应商沟通建议。' }],
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
    imageSrc: withBasePath('/images/Mask group-11.png'),

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
    processSteps: ['需求梳理与信息架构', '线框图与原型', '视觉与组件系统', '交互动效与交付'],
    pricing: {
      title: '范围建议',
      items: [
        { name: '落地页', price: '￥30,000+', features: ['文案协作', '视觉与响应式', '交付资源'] },
        { name: '网站/小型产品', price: '￥80,000+', features: ['IA/UX', 'UI 设计', '组件系统'] },
      ],
    },
    faqs: [{ question: '是否提供开发？', answer: '可与技术合作方协作或提供设计规范与资源。' }],
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
