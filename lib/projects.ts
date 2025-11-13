// lib/projects.ts

export interface Project {
  id: number;
  slug: string;
  imageSrc: string;
  title: string;
  category: string;
  // 用于筛选的标准化类别键（与 WorkFilter 选项匹配）
  categoryKey: string;
  // 可选模板类型，用于不同详情展示策略
  layoutType: 'branding' | 'packaging' | 'event';
  // 详情内容字段
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
    services: ['Brand Identity', 'UI/UX Design', 'Visual System'],
    overview:
      '字节范 (ByteStyle) 是字节跳动内部文化与生活方式的数字集合体。我们需要为其打造一套既符合互联网基因，又充满人文温度的全新视觉识别系统，以连接全球数万名员工。',
    challenge:
      '如何在保持科技大厂高效、理性形象的同时，打破冷峻的刻板印象，建立与年轻员工的情感连接，并适应多语言、多文化的全球办公环境？',
    solution:
      '我们提取了“连接”与“多元”作为核心概念，通过高饱和度的色彩系统与动态可变的辅助图形，创造了一个充满活力、包容万象的品牌视觉容器。新的视觉语言不仅在APP界面中流动，更延伸至线下活动与周边产品中。',
    gallery: [`${basePath}/images/Mask group.png`, `${basePath}/images/hero-image-1.jpeg`, `${basePath}/images/story2.jpg`],
  },
  {
    id: 2,
    slug: 'dual-exhibition',
    imageSrc: `${basePath}/images/Mask group-1.png`,
    title: '双人画展海报',
    category: '深圳报业集团',
    categoryKey: 'graphic',
    layoutType: 'branding',
    client: '深圳报业集团',
    year: '2022',
    services: ['Poster Design', 'Exhibition Identity', 'Typography'],
    overview:
      '为深圳报业集团主办的一场独特双人画展设计的视觉形象。展览汇集了两位风格迥异但精神内核相通的艺术家作品。',
    challenge:
      '如何在一张海报中平衡两位艺术家的强烈个人风格，既不厚此薄彼，又能产生视觉上的对话与张力？',
    solution:
      '我们采用“对立统一”的版式策略，利用分割与重组的排版技巧，将两者的代表性视觉元素交织在一起。字体上以宋体与现代无衬线碰撞，暗示传统与当代的对话。',
    gallery: [`${basePath}/images/Mask group-1.png`, `${basePath}/images/hero-image-2.jpeg`],
  },
  {
    id: 3,
    slug: 'tomato-writer-app',
    imageSrc: `${basePath}/images/Mask group-2.png`,
    title: '番茄作家助手APP',
    category: '字节跳动',
    categoryKey: 'branding',
    layoutType: 'branding',
    client: 'Tomato Novel',
    year: '2023',
    services: ['App Redesign', 'Iconography', 'User Experience'],
    overview:
      '服务百万网文创作者的移动写作工具升级项目，目标是提升写作沉浸感与流程效率。',
    challenge:
      '创作者随时记录灵感，界面需极度简洁以减少干扰，同时保持情感温度。',
    solution:
      '引入“心流模式”，去除非核心元素，仅保留编辑功能。色彩采用暖灰与番茄红点缀，营造温暖而专注的氛围。',
    gallery: [`${basePath}/images/Mask group-2.png`, `${basePath}/images/hero-image-1.jpeg`],
  },
  {
    id: 4,
    slug: 'xianghai-street',
    imageSrc: `${basePath}/images/Mask group-3.png`,
    title: '香海园西街',
    category: '华侨城',
    categoryKey: 'space',
    layoutType: 'event',
    client: 'OCT Group',
    year: '2021',
    services: ['Wayfinding', 'Environmental Graphics', 'Brand Identity'],
    overview:
      '滨海街区的导视与环境图形系统，以社区体验为核心，提升漫游与停留品质。',
    challenge:
      '街区地形复杂且人流密集，导视需高功能性并与海滨风格融合不突兀。',
    solution:
      '灵感来自海浪曲线与海风律动，导视牌采用流线金属折弯与哑光烤漆，色彩提取海蓝与浅金。',
    gallery: [`${basePath}/images/Mask group-3.png`, `${basePath}/images/hero-image-3.jpeg`],
  },
  {
    id: 5,
    slug: 'tomato-writer-app-2',
    imageSrc: `${basePath}/images/Mask group-4.png`,
    title: '番茄作家助手APP (2.0)',
    category: '字节跳动',
    categoryKey: 'branding',
    layoutType: 'branding',
    client: 'Tomato Novel',
    year: '2024',
    services: ['Brand Refresh', 'Digital Strategy'],
    overview:
      '品牌升级以“陪伴”和“成长”为核心价值，面向扩大的创作者群体。',
    challenge:
      '在保留用户习惯的前提下，传达更成熟与专业的品牌形象。',
    solution:
      '重塑 Logo 线条更圆润包容，推出“灵感伙伴”动态插画系统，出现在加载与空状态以陪伴写作者。',
    gallery: [`${basePath}/images/Mask group-4.png`, `${basePath}/images/story1.jpg`],
  },
  {
    id: 6,
    slug: 'ui-insect-bank',
    imageSrc: `${basePath}/images/Mask group-5.png`,
    title: 'UI昆虫-温情银行金融形象',
    category: '金利行',
    categoryKey: 'illustration',
    layoutType: 'branding',
    client: 'Jinli Bank',
    year: '2022',
    services: ['Brand Identity', 'IP Design', 'Motion'],
    overview:
      '以“懂你、暖你”为核心的金融品牌视觉，通过昆虫 IP 建立亲和的叙事。',
    challenge:
      '兼顾亲和力与信赖感，避免因可爱风格削弱专业形象。',
    solution:
      '设计蜜蜂、蚂蚁等勤劳智慧形象，采用扁平与微质感结合的风格，现代而稳重。',
    gallery: [`${basePath}/images/Mask group-5.png`, `${basePath}/images/story2.jpg`],
  },
  {
    id: 7,
    slug: 'huangmao-wetland-museum',
    imageSrc: `${basePath}/images/Mask group-6.png`,
    title: '黄茅咀湿地博物馆',
    category: '中国电影美术学会',
    categoryKey: 'space',
    layoutType: 'event',
    client: 'CFADA',
    year: '2023',
    services: ['Exhibition Design', 'Spatial Graphics'],
    overview:
      '一座生长在湿地之上的生态博物馆，进行馆内视觉导览与展陈平面设计。',
    challenge:
      '设计需“消隐”，成为连接观众与自然的桥梁而非主角。',
    solution:
      '所有导视牌采用半透明或镂空，让湿地景观透过文字显现，实现信息与环境融合。',
    gallery: [`${basePath}/images/Mask group-6.png`, `${basePath}/images/hero-image-3.jpeg`],
  },
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
    services: ['Packaging Design', 'Illustration'],
    overview:
      '将中国传统山水元素与现代极简包装结合，打造“水中看山”的独特体验。',
    challenge:
      '在 3 秒内于货架抓住消费者注意力并传递文化美感。',
    solution:
      '插画印制在瓶标背面，借助水体透明度形成波光粼粼的江山图景。',
    gallery: [`${basePath}/images/Mask group-7.png`, `${basePath}/images/Mask group-8.png`],
  },
  {
    id: 9,
    slug: 'pingshan-into-painting',
    imageSrc: `${basePath}/images/Mask group-8.png`,
    title: '坪山入画图开幕式',
    category: '坪山美术馆',
    categoryKey: 'graphic',
    layoutType: 'branding',
    client: 'Pingshan Art Museum',
    year: '2023',
    services: ['Event Key Visual', 'Poster Design'],
    overview:
      '“入画图”开幕式主视觉设计，以传统与当代的交错为主题。',
    challenge:
      '在主视觉中体现传统绘画在当代语境的重构。',
    solution:
      '将卷轴形式数字化解构，结合故障艺术重塑山水，形成既古老又前卫的冲击力。',
    gallery: [`${basePath}/images/Mask group-8.png`, `${basePath}/images/hero-image-2.jpeg`],
  },
  {
    id: 10,
    slug: 'digital-cloud-architecture',
    imageSrc: `${basePath}/images/Mask group-9.png`,
    title: '数字云栖建筑设计',
    category: '华润置地',
    categoryKey: 'space',
    layoutType: 'event',
    client: 'CR Land',
    year: '2024',
    services: ['Brand Identity', 'Real Estate Branding'],
    overview:
      '“云栖”高端住宅的品牌形象，主打科技、生态与未来人居理念。',
    challenge:
      '将抽象“云”概念具象化，同时体现建筑坚固与科技轻盈。',
    solution:
      'Logo 以几何线条勾勒云轮廓，色彩采用高级灰与科技蓝渐变，传递静谧与智慧。',
    gallery: [`${basePath}/images/Mask group-9.png`, `${basePath}/images/story1.jpg`],
  },
  {
    id: 11,
    slug: 'pingan-bank',
    imageSrc: `${basePath}/images/Mask group-10.png`,
    title: '平安银行品牌合作',
    category: '平安银行',
    categoryKey: 'branding',
    layoutType: 'branding',
    client: 'Ping An Bank',
    year: '2021',
    services: ['Digital Campaign', 'Social Media'],
    overview:
      '年度品牌营销战役的视觉创意与执行，拉近金融服务与用户距离。',
    challenge:
      '保持专业形象的同时提升社交媒体的年轻感与话题性。',
    solution:
      '以“平安”为主题的暖心插画海报，将金融场景化、生活化，增强共鸣。',
    gallery: [`${basePath}/images/Mask group-10.png`, `${basePath}/images/story2.jpg`],
  },
  {
    id: 12,
    slug: 'call-for-color',
    imageSrc: `${basePath}/images/Mask group-11.png`,
    title: '呼儿出彩开幕式',
    category: '坪山美术馆',
    categoryKey: 'graphic',
    layoutType: 'branding',
    client: 'Pingshan Art Museum',
    year: '2022',
    services: ['Event Identity', 'Installation Design'],
    overview:
      '儿童艺术展“呼儿出彩”的整体视觉策划，旨在激发儿童对色彩的原始感知。',
    challenge:
      '设计需要符合儿童的审美视角，充满趣味，但又不能流于幼稚。',
    solution:
      '我们使用了高纯度的三原色作为主色调，并通过积木拼搭的形式构成主视觉，鼓励孩子们像玩游戏一样去探索艺术世界。',
    gallery: [`${basePath}/images/Mask group-11.png`, `${basePath}/images/hero-image-1.jpeg`],
  },
  {
    id: 13,
    slug: 'instant-power-packaging',
    imageSrc: `${basePath}/images/Mask group-12.png`,
    title: '即时引爆力品牌-全动研包装',
    category: '怡宝',
    categoryKey: 'package',
    layoutType: 'packaging',
    client: "C'estbon",
    year: '2023',
    services: ['Packaging Design', 'Product Strategy'],
    overview:
      '为怡宝旗下高端运动饮料“全动研”打造的全新包装形象，主打“瞬间补给，引爆能量”。',
    challenge:
      '如何在静态的包装上表现出“瞬间爆发”的动感？',
    solution:
      '我们运用了放射状的线条与倾斜的字体设计，创造出强烈的速度感。瓶身采用了符合人体工学的握持设计，兼具美观与功能。',
    gallery: [`${basePath}/images/Mask group-12.png`, `${basePath}/images/hero-image-3.jpeg`],
  },
  {
    id: 14,
    slug: 'resonance-market-upgrade',
    imageSrc: `${basePath}/images/Mask group-13.png`,
    title: '共振市场升级',
    category: '金地商置',
    categoryKey: 'branding',
    layoutType: 'branding',
    client: 'Gemdale Properties',
    year: '2022',
    services: ['Brand Upgrade', 'Space Branding'],
    overview:
      '老旧菜市场的品牌化改造项目。',
    challenge:
      '保留市井烟火气的同时，提升市场的卫生感与品牌感。',
    solution:
      '我们提取了蔬菜、水果的天然色彩，设计了一套鲜活的导视系统。通过霓虹灯牌与复古字体的结合，打造了一个既传统又摩登的网红打卡地。',
    gallery: [`${basePath}/images/Mask group-13.png`, `${basePath}/images/story1.jpg`],
  },
  {
    id: 15,
    slug: 'happy-life-space-packaging',
    imageSrc: `${basePath}/images/Mask group-14.png`,
    title: '幸福生活空间包装',
    category: '金地商置',
    categoryKey: 'space',
    layoutType: 'event',
    client: 'Gemdale Properties',
    year: '2023',
    services: ['Environmental Graphics', 'Signage System'],
    overview:
      '为金地社区打造的公共空间视觉包装系统。',
    challenge:
      '让社区空间更有温度，促进邻里交流。',
    solution:
      '我们设计了一系列暖心的话语与插画，点缀在社区的各个角落（电梯间、长椅、花园），让回家的路充满温情。',
    gallery: [`${basePath}/images/Mask group-14.png`, `${basePath}/images/story2.jpg`],
  },
  {
    id: 16,
    slug: 'drawing-room-design',
    imageSrc: `${basePath}/images/Mask group-15.png`,
    title: '绘图室设计',
    category: 'THAN',
    categoryKey: 'space',
    layoutType: 'event',
    client: 'THAN Studio',
    year: '2021',
    services: ['Interior Design', 'Brand Culture'],
    overview:
      'THAN Studio 自己的办公空间设计项目。',
    challenge:
      '打造一个既能激发创意，又能让设计师放松身心的理想工作环境。',
    solution:
      '我们以“留白”为核心理念，大量使用白色与原木色，预留了大量的展示墙面与思考空间，让空间随着团队的成长而不断丰富。',
    gallery: [`${basePath}/images/Mask group-15.png`, `${basePath}/images/hero-image-2.jpeg`],
  },
  {
    id: 17,
    slug: 'sunflower-drum-brand',
    imageSrc: `${basePath}/images/Mask group-16.png`,
    title: '太阳花鼓文创品牌包装',
    category: '深圳报业',
    categoryKey: 'package',
    layoutType: 'packaging',
    client: 'Shenzhen Press Group',
    year: '2022',
    services: ['Cultural Branding', 'Packaging Design'],
    overview:
      '基于非遗文化“太阳花鼓”开发的文创品牌视觉。',
    challenge:
      '如何让古老的非遗文化被现代年轻人接受和喜爱？',
    solution:
      '我们将花鼓的纹样进行了矢量化重绘，提取出鲜艳的红黄配色，应用于手机壳、帆布袋等现代生活用品上，实现了传统的时尚化转译。',
    gallery: [`${basePath}/images/Mask group-16.png`, `${basePath}/images/hero-image-1.jpeg`],
  },
  {
    id: 18,
    slug: 'shanghai-xintiandi',
    imageSrc: `${basePath}/images/Mask group-17.png`,
    title: '上海新天地',
    category: '上海新天地',
    categoryKey: 'space',
    layoutType: 'event',
    client: 'Xintiandi',
    year: '2023',
    services: ['Festival Visuals', 'Installation Art'],
    overview:
      '上海新天地年度艺术节的主视觉与装置设计。',
    challenge:
      '在融合中西文化的城市地标，打造一场国际化的视觉盛宴。',
    solution:
      '我们以“光影”为媒介，设计了一组大型互动灯光装置，结合动态投影技术，让百年的石库门建筑焕发出赛博朋克般的未来感。',
    gallery: [`${basePath}/images/Mask group-17.png`, `${basePath}/images/story_banner.jpg`],
  },
];

export const getProjectBySlug = (slug: string) => {
  return PROJECT_DATA.find((p) => p.slug === slug);
};