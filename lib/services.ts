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
  valueProposition?: string[];
  deliverables?: string[];
  methodology?: string[];
  outcomes?: string[];
  timeline?: { duration: string; phases: string[] };
  teamRoles?: string[];
  artifacts?: string[];
  ctaNote?: string;
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
      '从定位、命名、叙事到视觉识别与应用规范，构建可扩展、易执行的品牌系统，确保上线后的传播一致与落地效率。',
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
    valueProposition: [
      '从0到1的系统性方法，减少试错和返工成本',
      '策略到视觉一体化，统一沟通语言与品牌体验',
      '围绕业务目标设计，兼顾短期增长与长期资产',
    ],
    deliverables: [
      '品牌策略报告与定位陈述',
      '核心识别（Logo/色彩/字体/图形）',
      'VI 应用规范与模板（名片、PPT、工牌等）',
      '品牌视觉指南（维护与扩展指引）',
    ],
    methodology: [
      '以用户与市场洞察为起点的策略工作坊',
      '视觉方向探索与快速原型验证',
      '系统化元素库与规范驱动的一致性落地',
    ],
    outcomes: [
      '上市沟通更清晰，获客转化提升',
      '品牌资产可复用，降低后续设计成本',
      '内部协作效率提升，减少执行分歧',
    ],
    timeline: { duration: '6–10 周', phases: ['策略与洞察', '方向探索', '系统设计', '交付与培训'] },
    teamRoles: ['策略顾问', '品牌设计师', '视觉总监', '项目经理'],
    artifacts: ['源文件与规范', '模板库', '品牌指南 PDF'],
    ctaNote: '欢迎预约工作坊，快速诊断品牌问题并明确方向',
    relatedCases: [
      { id: 1, slug: 'tomato-writer-app', title: '番茄作家助手' },
      { id: 2, slug: 'shiqu', title: '识区' },
    ],
  },
  {
    id: 2,
    slug: 'visual-identity',
    title: '视觉识别系统 (Visual Identity)',
    description: '构建高识别、可扩展的视觉识别系统，覆盖品牌关键触点。',
    imageSrc: withBasePath('/images/meishuxuehui_banner.jpeg'),

    // --- 详情页文案 ---
    heroTitle: '视觉识别系统',
    heroDescription:
      '从核心标识到色彩与版式系统，建立一致而可演化的视觉语言，保证跨媒介与场景的统一表达。',
    serviceIncludes: [
      '标志与副标识系统',
      '色彩体系与对比规范',
      '字体与版式栅格',
      '图形/图标库与摄影风格',
      '应用模板与品牌手册',
    ],
    processSteps: ['识别审计与方向共创', '核心元素探索与验证', '系统化设计与规范', '应用落地与手册'],
    pricing: {
      title: '建议范围',
      items: [
        { name: 'VI 基础', price: '￥60,000+', features: ['Logo', '色彩/字体', '基础规范'] },
        { name: 'VI 系统', price: '￥120,000+', features: ['完整元素系统', '应用规范', '模板'] },
      ],
    },
    faqs: [{ question: '是否包含 Logo 设计？', answer: '包含，可提供多方向提案与迭代。' }],
    valueProposition: [
      '建立可扩展的识别系统，保证跨触点一致性',
      '兼顾差异化与可读性，提升品牌记忆度',
    ],
    deliverables: ['Logo 主副标', '色彩与字体系统', '图形与摄影风格', '应用规范与模板'],
    methodology: ['识别审计与基线盘点', '方向探索与原型测试', '系统设计与规范落地'],
    outcomes: ['视觉一致性提升', '传播效率提升', '品牌辨识度增强'],
    timeline: { duration: '4–8 周', phases: ['审计与方向', '系统设计', '规范与应用'] },
    teamRoles: ['品牌设计师', '视觉总监', '插画/摄影顾问'],
    artifacts: ['识别系统源文件', '规范文档', '模板'],
    ctaNote: '可先做识别审计与轻咨询，评估现状与改进空间',
    relatedCases: [
      { id: 8, slug: 'china-film-art-association', title: '中国电影美术学会' },
      { id: 9, slug: 'wenzhou-bank', title: '温州银行' },
    ],
  },
  {
    id: 3,
    slug: 'product-packaging',
    title: '产品与包装 (Product & Packaging)',
    description: '以“货架识别 + 信息清晰 + 系列扩展”为核心的包装系统设计。',
    imageSrc: withBasePath('/images/yibao_banner.jpeg'),

    // --- 详情页文案 ---
    heroTitle: '产品与包装',
    heroDescription:
      '围绕结构与材质、口味与系列、信息与法规，构建兼具美感与高可读性的包装系统，保证跨渠道稳定落地。',
    serviceIncludes: [
      '结构与材质建议',
      '系列视觉与口味体系',
      '标签/瓶贴信息布局',
      '法规合规与信息校对',
      '3D呈现与打样支持',
    ],
    processSteps: ['竞品与货架研究', '结构与视觉方案', '系列化规则与模板', '打样与调整交付'],
    pricing: {
      title: '常见范围',
      items: [
        { name: '单品包装', price: '￥40,000+', features: ['结构建议', '正背标设计', '打样支持'] },
        { name: '系列包装', price: '￥100,000+', features: ['系列体系', '多 SKU 设计', '规范'] },
      ],
    },
    faqs: [{ question: '是否提供打样？', answer: '提供打样支持与供应商沟通建议。' }],
    valueProposition: ['兼顾货架可见性与合规标识', '系列化体系支持扩张', '成本与供应链友好'],
    deliverables: ['结构建议与展开图', '视觉方案与标签版式', '系列规范与打样文件'],
    methodology: ['实地调研与货架观察', '结构与材质结合的方案探索', '系列化规则与模板落地'],
    outcomes: ['货架识别度提升', '系列组合一致性提升', '生产沟通效率提升'],
    timeline: { duration: '3–6 周', phases: ['调研与方向', '方案与系列', '打样与交付'] },
    teamRoles: ['包装设计师', '视觉设计师', '3D/打样顾问'],
    artifacts: ['打样包', '印刷文件', '系列规范'],
    ctaNote: '可提供小批量打样与供应商对接建议',
    relatedCases: [
      { id: 10, slug: 'yibao-magic-drink', title: '怡宝魔力运动饮料' },
      { id: 11, slug: 'jialinshan-natural-mineral-water', title: '加林山天然矿泉水' },
    ],
  },
  {
    id: 4,
    slug: 'digital-experience',
    title: '数字体验设计 (Digital Experience)',
    description: '以用户旅程为核心的产品与网站设计，强调清晰、可用与美感。',
    imageSrc: withBasePath('/images/shiqu_banner.jpeg'),

    // --- 详情页文案 ---
    heroTitle: '数字体验设计',
    heroDescription:
      '从信息架构与交互到视觉系统，打造连贯的数字体验，将品牌叙事转化为可用的界面与流程。',
    serviceIncludes: [
      '信息架构与用户旅程',
      '交互与界面设计（App/Web）',
      '设计系统与组件库',
      '原型测试与可用性优化',
    ],
    processSteps: ['目标与范围对齐', 'IA 与关键路径', 'UI 系统与组件', '验证与交付'],
    pricing: {
      title: '范围建议',
      items: [
        { name: '落地页', price: '￥30,000+', features: ['文案协作', '视觉与响应式', '交付资源'] },
        { name: '网站/小型产品', price: '￥80,000+', features: ['IA/UX', 'UI 设计', '组件系统'] },
      ],
    },
    faqs: [{ question: '是否提供开发？', answer: '可与技术合作方协作或提供设计规范与资源。' }],
    valueProposition: ['以业务目标驱动的体验设计', '多设备一致性与可访问性', '可扩展的组件系统'],
    deliverables: ['信息架构与线框', '高保真界面稿', '动效规格与组件库'],
    methodology: ['可用性优先的迭代验证', '设计系统驱动的规模化', '数据与事件的闭环优化'],
    outcomes: ['转化率提升', '一致体验降低学习成本', '开发与协作效率提升'],
    timeline: { duration: '4–8 周', phases: ['IA/UX', 'UI/Design System', '交付与质控'] },
    teamRoles: ['产品设计师', '视觉设计师', '动效设计师', '项目经理'],
    artifacts: ['交付资源包', '组件库规范', '动效规范'],
    ctaNote: '可提供设计系统试点与页面级快速改版方案',
    relatedCases: [
      { id: 1, slug: 'tomato-writer-app', title: '番茄作家助手' },
      { id: 2, slug: 'shiqu', title: '识区' },
    ],
  },
];

// 3. 辅助函数
export const getServiceBySlug = (slug: string) => {
  return SERVICE_DATA.find((service) => service.slug === slug);
};
