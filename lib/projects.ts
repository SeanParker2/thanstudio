// lib/projects.ts

export interface Project {
  id: number;
  slug: string;
  imageSrc: string;
  title: string;
  category: string;
  // 用于筛选的标准化类别键（与 WorkFilter 选项匹配）
  categoryKey: string;
  // 用于详情模板差异化的布局类型
  layoutType: 'branding' | 'packaging' | 'event';
  // 详情信息
  client: string;
  year: string;
  services: string[];
  overview: string;
  challenge: string;
  solution: string;
  gallery: string[];
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const PROJECT_DATA: Project[] = [
  // 案例 1：字节范 APP（品牌类）
  {
    id: 1,
    slug: 'byte-style-app',
    imageSrc: `${basePath}/images/Mask group.png`,
    title: '字节范APP品牌形象',
    category: '字节跳动',
    categoryKey: 'branding',
    layoutType: 'branding',
    client: 'ByteDance',
    year: '2023',
    services: ['Brand Identity', 'UI/UX Design', 'Motion Graphics'],
    overview:
      '字节范 (ByteStyle) 是字节跳动内部文化与生活方式的集合体。我们需要为其打造一套既符合互联网基因，又充满人文温度的全新视觉识别系统。',
    challenge:
      '如何在保持科技感的同时，打破大厂的冷峻印象，建立与年轻员工的情感连接？',
    solution:
      '我们提取了“连接”与“多元”作为核心概念，通过高饱和度的色彩系统与动态可变的辅助图形，创造了一个充满活力、包容万象的品牌视觉容器。',
    gallery: [
      `${basePath}/images/Mask group.png`,
      `${basePath}/images/hero-image-1.jpeg`,
      `${basePath}/images/Mask group-2.png`,
    ],
  },
  // 默认案例（平面/海报，可归为 branding 模板）
  {
    id: 2,
    slug: 'dual-exhibition',
    imageSrc: `${basePath}/images/Mask group-1.png`,
    title: '双人画展海报',
    category: '深圳报业集团',
    categoryKey: 'graphic',
    layoutType: 'branding',
    client: '深圳报业集团',
    year: '2023',
    services: ['Graphic Design', 'Poster Design'],
    overview:
      '以展览主题为核心构建视觉语言，运用几何构成与留白策略，形成兼具张力与秩序的平面体系。',
    challenge:
      '在有限触达时间内，如何提升展览信息辨识度并扩大传播？',
    solution:
      '通过强对比的色彩与分层排版，降低阅读成本；同时在动态素材中强调主题核心，形成记忆点。',
    gallery: [
      `${basePath}/images/Mask group-1.png`,
      `${basePath}/images/hero-image-2.jpeg`,
      `${basePath}/images/story2.jpg`,
    ],
  },
  {
    id: 3,
    slug: 'tomato-writer-app',
    imageSrc: `${basePath}/images/Mask group-2.png`,
    title: '番茄作家助手APP',
    category: '字节跳动',
    categoryKey: 'branding',
    layoutType: 'branding',
    client: 'ByteDance',
    year: '2023',
    services: ['Product Branding', 'UI Design'],
    overview:
      '为写作工具打造简洁高效的视觉系统，强调内容承载与专注体验。',
    challenge:
      '如何在复杂功能场景下保持视觉一致性与可用性？',
    solution:
      '建立模块化的组件库与视觉规范，确保多端一致并支持快速迭代。',
    gallery: [
      `${basePath}/images/Mask group-2.png`,
      `${basePath}/images/hero-image-1.jpeg`,
      `${basePath}/images/Mask group-4.png`,
    ],
  },
  {
    id: 4,
    slug: 'xianghai-street',
    imageSrc: `${basePath}/images/Mask group-3.png`,
    title: '香海园西街',
    category: '华侨城',
    categoryKey: 'space',
    layoutType: 'event',
    client: '华侨城',
    year: '2022',
    services: ['Spatial Design', 'Wayfinding'],
    overview:
      '以社区体验为核心的街区视觉导视与空间叙事设计，提升漫游与停留品质。',
    challenge:
      '如何在复杂街区动线中建立清晰与友好的导航系统？',
    solution:
      '通过分层级的导视体系与高识别性的方向标识，减少迷路与重复路径。',
    gallery: [
      `${basePath}/images/Mask group-3.png`,
      `${basePath}/images/hero-image-3.jpeg`,
      `${basePath}/images/story2.jpg`,
    ],
  },
  {
    id: 5,
    slug: 'tomato-writer-app-2',
    imageSrc: `${basePath}/images/Mask group-4.png`,
    title: '番茄作家助手APP',
    category: '字节跳动',
    categoryKey: 'branding',
    layoutType: 'branding',
    client: 'ByteDance',
    year: '2023',
    services: ['Product Branding', 'UI Design'],
    overview:
      '围绕效率与专注构建视觉体验，强调内容与工具的协同。',
    challenge:
      '如何让信息架构更直觉，从而缩短学习曲线？',
    solution:
      '采用简化的信息层级与清晰的焦点色使用规则，提升新手可用性。',
    gallery: [
      `${basePath}/images/Mask group-4.png`,
      `${basePath}/images/hero-image-2.jpeg`,
      `${basePath}/images/Mask group-2.png`,
    ],
  },
  {
    id: 6,
    slug: 'ui-insect-bank',
    imageSrc: `${basePath}/images/Mask group-5.png`,
    title: 'UI昆虫-温情银行金融形象',
    category: '金利行',
    categoryKey: 'illustration',
    layoutType: 'branding',
    client: '金利行',
    year: '2023',
    services: ['Illustration', 'Brand Visual'],
    overview:
      '以拟态与拟物语言营造亲和与陪伴感的银行系统视觉。',
    challenge:
      '如何避免过度装饰而影响功能的可用性？',
    solution:
      '通过可读性优先的视觉层级与谨慎的插画使用范围，确保功能清晰。',
    gallery: [
      `${basePath}/images/Mask group-5.png`,
      `${basePath}/images/hero-image-1.jpeg`,
      `${basePath}/images/Mask group-10.png`,
    ],
  },
  // 案例 3：湿地博物馆（活动/空间类）
  {
    id: 7,
    slug: 'wetland-museum',
    imageSrc: `${basePath}/images/Mask group-6.png`,
    title: '黄茅咀湿地博物馆',
    category: '中国电影美术学会',
    categoryKey: 'space',
    layoutType: 'event',
    client: 'CFADA',
    year: '2024',
    services: ['Spatial Design', 'Wayfinding', 'Exhibition Design'],
    overview:
      '一座生长在湿地之上的博物馆。我们的导视系统设计旨在“消隐”，让参观者专注于自然本身。',
    challenge:
      '如何让标识系统指引方向，却又不破坏湿地原本的宁静与生态美感？',
    solution:
      '我们选用了耐候钢与原木作为主要材质，随着时间的推移，导视牌将自然锈蚀、变色，最终与湿地环境融为一体，成为景观的一部分。',
    gallery: [
      `${basePath}/images/Mask group-6.png`,
      `${basePath}/images/hero-image-3.jpeg`,
      `${basePath}/images/story2.jpg`,
    ],
  },
  // 案例 2：矿泉水（包装类）
  {
    id: 8,
    slug: 'lunch-landscape-water',
    imageSrc: `${basePath}/images/Mask group-7.png`,
    title: '午餐江山图鉴矿泉水',
    category: '农夫山泉',
    categoryKey: 'package',
    layoutType: 'packaging',
    client: 'Nongfu Spring',
    year: '2022',
    services: ['Packaging Design', 'Illustration', 'Copywriting'],
    overview:
      '这不仅仅是一瓶水，更是一幅流动的山水画卷。我们将中国传统山水元素与现代极简包装相结合。',
    challenge:
      '在竞争激烈的瓶装水货架上，如何让产品在 3 秒内通过视觉美感抓住消费者的眼球？',
    solution:
      '利用瓶身的透明度，我们将山水插画印制在瓶标背面。透过清澈的水体，消费者能看到放大的、波光粼粼的江山图景，创造出“水中看山”的独特视觉体验。',
    gallery: [
      `${basePath}/images/Mask group-7.png`,
      `${basePath}/images/Mask group-8.png`,
      `${basePath}/images/Mask group-12.png`,
    ],
  },
  {
    id: 9,
    slug: 'pingshan-into-painting',
    imageSrc: `${basePath}/images/Mask group-8.png`,
    title: '坪山入画图开幕式',
    category: '坪山美术馆',
    categoryKey: 'graphic',
    layoutType: 'branding',
    client: '坪山美术馆',
    year: '2023',
    services: ['Graphic Design', 'Event Visual'],
    overview:
      '围绕开幕事件进行视觉策划与物料系统设计，统一识别与传播语气。',
    challenge:
      '如何在大量物料中保持一致性并兼顾执行效率？',
    solution:
      '建立模板化的版式系统与色彩规范，保障不同尺寸与介质的落地效果。',
    gallery: [
      `${basePath}/images/Mask group-8.png`,
      `${basePath}/images/hero-image-2.jpeg`,
      `${basePath}/images/Mask group-13.png`,
    ],
  },
  {
    id: 10,
    slug: 'digital-cloud-architecture',
    imageSrc: `${basePath}/images/Mask group-9.png`,
    title: '数字云栖建筑设计',
    category: '华润置地',
    categoryKey: 'space',
    layoutType: 'event',
    client: '华润置地',
    year: '2022',
    services: ['Spatial Design', 'Exhibition Design'],
    overview:
      '以数据与建筑融合为主题的空间视觉系统，强调“云”的轻盈层次与流动感。',
    challenge:
      '如何在复杂展陈中保持信息可达与路径清晰？',
    solution:
      '采用分区色彩编码与路径引导标识，降低认知负担。',
    gallery: [
      `${basePath}/images/Mask group-9.png`,
      `${basePath}/images/hero-image-3.jpeg`,
      `${basePath}/images/story2.jpg`,
    ],
  },
  {
    id: 11,
    slug: 'pingan-bank',
    imageSrc: `${basePath}/images/Mask group-10.png`,
    title: '平安银行品牌合作',
    category: '平安银行',
    categoryKey: 'branding',
    layoutType: 'branding',
    client: '平安银行',
    year: '2023',
    services: ['Brand Identity', 'Campaign Visual'],
    overview:
      '围绕金融服务构建可信赖与温暖的品牌语境，强化客户体验。',
    challenge:
      '如何在合规框架下保持品牌表现力与差异化？',
    solution:
      '以信息透明与友好语气为基础，辅以规范化的视觉系统，提升触达质量。',
    gallery: [
      `${basePath}/images/Mask group-10.png`,
      `${basePath}/images/hero-image-1.jpeg`,
      `${basePath}/images/Mask group-11.png`,
    ],
  },
  {
    id: 12,
    slug: 'call-for-color',
    imageSrc: `${basePath}/images/Mask group-11.png`,
    title: '呼儿出彩开幕式',
    category: '坪山美术馆',
    categoryKey: 'graphic',
    layoutType: 'branding',
    client: '坪山美术馆',
    year: '2023',
    services: ['Graphic Design', 'Poster Design'],
    overview:
      '以色彩叙事为主的展览视觉系统，强调节奏与韵律。',
    challenge:
      '如何在多主题与多作者的场景下统一视觉语言？',
    solution:
      '建立基准栅格与统一的色彩节奏，确保视觉一致与信息优先。',
    gallery: [
      `${basePath}/images/Mask group-11.png`,
      `${basePath}/images/hero-image-2.jpeg`,
      `${basePath}/images/Mask group-1.png`,
    ],
  },
  {
    id: 13,
    slug: 'instant-power-packaging',
    imageSrc: `${basePath}/images/Mask group-12.png`,
    title: '即时引爆力品牌-全动研包装',
    category: '怡宝',
    categoryKey: 'package',
    layoutType: 'packaging',
    client: '怡宝',
    year: '2022',
    services: ['Packaging Design', 'Industrial Collaboration'],
    overview:
      '以运动表现为主题的功能性包装设计，强调抓手与结构识别。',
    challenge:
      '如何在法规约束下实现高识别与高记忆点？',
    solution:
      '通过结构差异化与强识别的色块分区，建立货架优势。',
    gallery: [
      `${basePath}/images/Mask group-12.png`,
      `${basePath}/images/Mask group-7.png`,
      `${basePath}/images/Mask group-8.png`,
    ],
  },
  {
    id: 14,
    slug: 'resonance-market-upgrade',
    imageSrc: `${basePath}/images/Mask group-13.png`,
    title: '共振市场升级',
    category: '金地商置',
    categoryKey: 'branding',
    layoutType: 'branding',
    client: '金地商置',
    year: '2023',
    services: ['Brand Upgrade', 'Campaign Visual'],
    overview:
      '围绕商业场景的品牌焕新，强调功能动线与视觉软装协同。',
    challenge:
      '如何在既有资产基础上实现增量与差异化？',
    solution:
      '以“共振”为核心概念，构建多触点一致的视觉输出。',
    gallery: [
      `${basePath}/images/Mask group-13.png`,
      `${basePath}/images/hero-image-1.jpeg`,
      `${basePath}/images/story2.jpg`,
    ],
  },
  {
    id: 15,
    slug: 'happy-life-space-packaging',
    imageSrc: `${basePath}/images/Mask group-14.png`,
    title: '幸福生活空间包装',
    category: '金地商置',
    categoryKey: 'package',
    layoutType: 'packaging',
    client: '金地商置',
    year: '2022',
    services: ['Packaging Design', 'Retail Visual'],
    overview:
      '以生活方式为主的包装系统，强调温度与亲近感的材质表达。',
    challenge:
      '如何在多品类矩阵中保持统一的系列识别？',
    solution:
      '建立基础结构与视觉规范，保证系列化输出与柔性扩展。',
    gallery: [
      `${basePath}/images/Mask group-14.png`,
      `${basePath}/images/Mask group-12.png`,
      `${basePath}/images/Mask group-7.png`,
    ],
  },
  {
    id: 16,
    slug: 'drawing-room-design',
    imageSrc: `${basePath}/images/Mask group-15.png`,
    title: '绘图室设计',
    category: 'THAN',
    categoryKey: 'illustration',
    layoutType: 'branding',
    client: 'THAN',
    year: '2023',
    services: ['Illustration', 'Art Direction'],
    overview:
      '以手绘与生成图像结合的实验项目，探索视觉语言的边界。',
    challenge:
      '如何在实验性与可读性之间取得平衡？',
    solution:
      '在叙事结构上引入线索与章节，降低理解门槛并提升沉浸感。',
    gallery: [
      `${basePath}/images/Mask group-15.png`,
      `${basePath}/images/hero-image-2.jpeg`,
      `${basePath}/images/Mask group-11.png`,
    ],
  },
  {
    id: 17,
    slug: 'sunflower-drum-brand',
    imageSrc: `${basePath}/images/Mask group-16.png`,
    title: '太阳花鼓文创品牌包装',
    category: '深圳报业',
    categoryKey: 'package',
    layoutType: 'packaging',
    client: '深圳报业',
    year: '2022',
    services: ['Packaging Design', 'Brand Visual'],
    overview:
      '以民俗与节庆为灵感的文化产品包装设计，打造具有记忆点的伴手礼。',
    challenge:
      '如何在文化语境与现代审美之间达成协调？',
    solution:
      '以现代简约为基础，保留关键符号并进行抽象化重构。',
    gallery: [
      `${basePath}/images/Mask group-16.png`,
      `${basePath}/images/Mask group-12.png`,
      `${basePath}/images/story2.jpg`,
    ],
  },
  {
    id: 18,
    slug: 'shanghai-xintiandi',
    imageSrc: `${basePath}/images/Mask group-17.png`,
    title: '上海新天地',
    category: '上海新天地',
    categoryKey: 'space',
    layoutType: 'event',
    client: '上海新天地',
    year: '2022',
    services: ['Spatial Design', 'Wayfinding'],
    overview:
      '在商业街区中进行导视与视觉系统升级，提升空间识别与停留体验。',
    challenge:
      '如何在历史与现代交织的空间中表达品牌特征？',
    solution:
      '以材质与细节为载体，建立低干扰但高识别的视觉系统。',
    gallery: [
      `${basePath}/images/Mask group-17.png`,
      `${basePath}/images/hero-image-3.jpeg`,
      `${basePath}/images/hero-image-1.jpeg`,
    ],
  },
];

export const getProjectBySlug = (slug: string) => {
  return PROJECT_DATA.find((p) => p.slug === slug);
};