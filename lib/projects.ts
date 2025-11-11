// lib/projects.ts

export interface Project {
  id: number;
  slug: string;
  imageSrc: string;
  title: string;
  category: string;
  // 用于筛选的标准化类别键（与 WorkFilter 选项匹配）
  categoryKey: string;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const PROJECT_DATA: Project[] = [
  { id: 1, slug: 'byte-style-app', imageSrc: `${basePath}/images/Mask group.png`, title: '字节范APP品牌形象', category: '字节跳动', categoryKey: 'branding' },
  { id: 2, slug: 'dual-exhibition', imageSrc: `${basePath}/images/Mask group-1.png`, title: '双人画展海报', category: '深圳报业集团', categoryKey: 'graphic' },
  { id: 3, slug: 'tomato-writer-app', imageSrc: `${basePath}/images/Mask group-2.png`, title: '番茄作家助手APP', category: '字节跳动', categoryKey: 'branding' },
  { id: 4, slug: 'xianghai-street', imageSrc: `${basePath}/images/Mask group-3.png`, title: '香海园西街', category: '华侨城', categoryKey: 'space' },
  { id: 5, slug: 'tomato-writer-app-2', imageSrc: `${basePath}/images/Mask group-4.png`, title: '番茄作家助手APP', category: '字节跳动', categoryKey: 'branding' },
  { id: 6, slug: 'ui-insect-bank', imageSrc: `${basePath}/images/Mask group-5.png`, title: 'UI昆虫-温情银行金融形象', category: '金利行', categoryKey: 'illustration' },
  { id: 7, slug: 'huangmao-wetland-museum', imageSrc: `${basePath}/images/Mask group-6.png`, title: '黄茅咀湿地博物馆', category: '中国电影美术学会', categoryKey: 'space' },
  { id: 8, slug: 'lunch-landscape-water', imageSrc: `${basePath}/images/Mask group-7.png`, title: '午餐江山图鉴矿泉水', category: '农夫山泉', categoryKey: 'package' },
  { id: 9, slug: 'pingshan-into-painting', imageSrc: `${basePath}/images/Mask group-8.png`, title: '坪山入画图开幕式', category: '坪山美术馆', categoryKey: 'graphic' },
  { id: 10, slug: 'digital-cloud-architecture', imageSrc: `${basePath}/images/Mask group-9.png`, title: '数字云栖建筑设计', category: '华润置地', categoryKey: 'space' },
  { id: 11, slug: 'pingan-bank', imageSrc: `${basePath}/images/Mask group-10.png`, title: '平安银行品牌合作', category: '平安银行', categoryKey: 'branding' },
  { id: 12, slug: 'call-for-color', imageSrc: `${basePath}/images/Mask group-11.png`, title: '呼儿出彩开幕式', category: '坪山美术馆', categoryKey: 'graphic' },
  { id: 13, slug: 'instant-power-packaging', imageSrc: `${basePath}/images/Mask group-12.png`, title: '即时引爆力品牌-全动研包装', category: '怡宝', categoryKey: 'package' },
  { id: 14, slug: 'resonance-market-upgrade', imageSrc: `${basePath}/images/Mask group-13.png`, title: '共振市场升级', category: '金地商置', categoryKey: 'branding' },
  { id: 15, slug: 'happy-life-space-packaging', imageSrc: `${basePath}/images/Mask group-14.png`, title: '幸福生活空间包装', category: '金地商置', categoryKey: 'package' },
  { id: 16, slug: 'drawing-room-design', imageSrc: `${basePath}/images/Mask group-15.png`, title: '绘图室设计', category: 'THAN', categoryKey: 'illustration' },
  { id: 17, slug: 'sunflower-drum-brand', imageSrc: `${basePath}/images/Mask group-16.png`, title: '太阳花鼓文创品牌包装', category: '深圳报业', categoryKey: 'package' },
  { id: 18, slug: 'shanghai-xintiandi', imageSrc: `${basePath}/images/Mask group-17.png`, title: '上海新天地', category: '上海新天地', categoryKey: 'space' },
];

export const getProjectBySlug = (slug: string) => {
  return PROJECT_DATA.find((p) => p.slug === slug);
};