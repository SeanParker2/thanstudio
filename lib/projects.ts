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
  designThinking?: string;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const PROJECT_DATA: Project[] = [
  {
    id: 1,
    slug: 'tomato-writer-app',
    imageSrc: `${basePath}/images/tomato_writer_app_banner.jpeg`,
    title: '番茄作家助手',
    category: '字节跳动',
    categoryKey: 'branding',
    layoutType: 'branding',
    client: 'Tomato Novel',
    year: '2023',
    services: ['App Redesign', 'Iconography', 'User Experience'],
    overview:
      '番茄作家助手是基于番茄小说诞生的针对作家的专业线上写作平台，旨在让作家从纸媒转向互联网端时实现顺其自然的过渡，不会形成落差；同时享受到有别于其他 APP 的写作体验。品牌设计始终围绕番茄体系、品牌辨识度与连贯性为核心，通过简洁的品牌调性与友好的交互设计提升写作体验，为作家提供更加舒适流畅的创作空间。',
    challenge:
      '让传统纸媒作家顺滑过渡到互联网写作，同时保持番茄体系的品牌辨识与连贯性，兼顾专业平台的简洁与友好体验。',
    solution:
      '围绕番茄体系核心重构视觉与交互，以简洁的品牌调性与友好的人机交互构建沉浸、舒适、流畅的创作空间；品牌标准色沿用橙红以强化亲和与品质印象；标志以番茄、番茄籽、番茄蒂与钢笔元素融合于包容的圆形中，直观表达平台属性与辨识度。',
    designThinking:
      'LOGO以番茄、番茄籽、番茄蒂和钢笔为基本元素结合而成，整体以具有包容性的圆形作为基本外形，将作家写作过程融入图形，采用简洁的图形处理方式，传达品牌的简洁属性，直观体现平台的业务属性和辨识度。沿用橙红色作为品牌标准色，显示出友好的品牌印象，同时传达出我们的品质感。',
    gallery: [
      `${basePath}/images/tomato_writer_app_xiangqing.023.jpeg`,
      `${basePath}/images/tomato_writer_app_xiangqing.024.jpeg`,
      `${basePath}/images/tomato_writer_app_xiangqing.025.jpeg`,
      `${basePath}/images/tomato_writer_app_xiangqing.026.jpeg`,
      `${basePath}/images/tomato_writer_app_xiangqing.027.jpeg`,
      `${basePath}/images/tomato_writer_app_xiangqing.028.jpeg`,
      `${basePath}/images/tomato_writer_app_xiangqing.029.jpeg`,
      `${basePath}/images/tomato_writer_app_xiangqing.030.jpeg`,
      `${basePath}/images/tomato_writer_app_xiangqing.031.jpeg`,
      `${basePath}/images/tomato_writer_app_xiangqing.032.jpeg`,
      `${basePath}/images/tomato_writer_app_xiangqing.033.jpeg`,
      `${basePath}/images/tomato_writer_app_xiangqing.034.jpeg`,
      `${basePath}/images/tomato_writer_app_xiangqing.035.jpeg`,
      `${basePath}/images/tomato_writer_app_xiangqing.036.jpeg`,
      `${basePath}/images/tomato_writer_app_xiangqing.037.jpeg`,
      `${basePath}/images/tomato_writer_app_xiangqing.038.jpeg`,
      `${basePath}/images/tomato_writer_app_xiangqing.039.jpeg`,
    ],
  },
  {
    id: 2,
    slug: 'shiqu',
    imageSrc: `${basePath}/images/shiqu_banner.jpeg`,
    title: '识区',
    category: '字节跳动',
    categoryKey: 'branding',
    layoutType: 'branding',
    client: 'ByteDance / 今日头条',
    year: '2022',
    services: ['App Branding', 'Product Strategy', 'Interaction Design'],
    overview:
      '识区是一款以兴趣驱动的智能阅读与社交产品，采取邀请制注册，用户围绕“圈子”进行内容订阅与互动。圈内内容由系统从头条生态抓取优质来源，并由“区长”进行人工筛选与维护，形成算法与人工协同的精致阅读体验。',
    challenge:
      '在信息过载与信息茧房背景下，如何以圈子机制实现更有效的内容组织与发现；同时兼顾算法分发与人工精选的平衡，建立可信的阅读社区氛围。',
    solution:
      '以兴趣圈子为核心的信息架构，强化订阅与讨论的闭环；结合系统抓取与“区长”人工筛选，提升内容质量与相关性；在交互上强调克制与可控，降低噪音与过度推荐，帮助用户建立长期的知识获取与社交连接。',
    gallery: [
      `${basePath}/images/shiqu_xiangqing.011.jpeg`,
      `${basePath}/images/shiqu_xiangqing.012.jpeg`,
      `${basePath}/images/shiqu_xiangqing.013.jpeg`,
      `${basePath}/images/shiqu_xiangqing.014.jpeg`,
      `${basePath}/images/shiqu_xiangqing.015.jpeg`,
      `${basePath}/images/shiqu_xiangqing.016.jpeg`,
      `${basePath}/images/shiqu_xiangqing.017.jpeg`,
      `${basePath}/images/shiqu_xiangqing.018.jpeg`,
      `${basePath}/images/shiqu_xiangqing.019.jpeg`,
    ],
  },
  {
    id: 3,
    slug: 'neice',
    imageSrc: `${basePath}/images/neice_banner.jpeg`,
    title: '字节跳动内测平台',
    category: '字节跳动',
    categoryKey: 'branding',
    layoutType: 'branding',
    client: 'ByteDance',
    year: '2020',
    services: ['Internal Beta', 'QA Program', 'Community Operations'],
    overview:
      '字节内测致力于打造公司内部产品交流平台。我们提倡协作、沟通、不设边界的文化，鼓励大家多体验公司各 App 最新内测版，反馈问题或提出产品建议，帮助公司不断优化产品，尽最大努力保证外部用户的良好体验。',
    challenge:
      '如何在跨城市、跨职能的大规模参与下，建立高质量、可持续的内部测试机制，并确保反馈能形成可执行的迭代闭环，避免信息孤岛与低效沟通。',
    solution:
      '以“内部交流平台 + 内测社区”双轨构建，打通反馈通道与分发机制，形成从体验—反馈—复盘—迭代的闭环。过去 11 个月，累计来自 40+ 城市的 5400+ ByteDancers 参与 160+ 次产品迭代的内部测试活动，及时拦截 9600+ 个 Bug，并提出 15600+ 条产品优化建议（数据截至 2020-10-13）。',
    gallery: [
      `${basePath}/images/neice_xiangqing.042.jpeg`,
      `${basePath}/images/neice_xiangqing.043.jpeg`,
      `${basePath}/images/neice_xiangqing.044.jpeg`,
      `${basePath}/images/neice_xiangqing.045.jpeg`,
      `${basePath}/images/neice_xiangqing.046.jpeg`,
      `${basePath}/images/neice_xiangqing.047.jpeg`,
      `${basePath}/images/neice_xiangqing.048.jpeg`,
      `${basePath}/images/neice_xiangqing.049.jpeg`,
      `${basePath}/images/neice_xiangqing.050.jpeg`,
      `${basePath}/images/neice_xiangqing.051.jpeg`,
      `${basePath}/images/neice_xiangqing.052.jpeg`,
      `${basePath}/images/neice_xiangqing.053.jpeg`,
    ],
  },
  {
    id: 4,
    slug: 'zhuhai-city-identity',
    imageSrc: `${basePath}/images/zhuhai_banner.jpeg`,
    title: '珠海城市形象',
    category: '珠海市',
    categoryKey: 'branding',
    layoutType: 'branding',
    client: 'Zhuhai City',
    year: '2019',
    services: ['City Branding', 'VI System', 'Visual Identity'],
    overview:
      '珠海城市形象VI以“海湾城市”特质为核心，构建统一的视觉识别体系。标识综合珠海最具识别度的城市符号，以港珠澳大桥、珠海渔女与绿水青山为核心意象，传达开放、生态与人文的城市精神。统一的VI覆盖政府传播、公共导视与数字媒介，提升城市品牌辨识度与传播效率。',
    challenge:
      '在多场景、多媒介的城市传播中，如何以具象且包容的超级符号统领识别系统；并在地标意象与现代审美之间取得平衡，避免复杂元素造成识别混乱。',
    solution:
      '以港珠澳大桥的线性结构与海湾流线作为几何基底，融入“渔女”与生态绿的象征形态，形成具有延展性的核心标识与辅助图形；色彩系统提取海蓝与生态绿为主色，建立跨载体的规范网格与应用标准，使形象在户外导视、宣传物料与数字平台保持一致与高可见度。（参考：2019年珠海城市标识发布与相关VI阐释）',
    gallery: [
      `${basePath}/images/zhuhai_xiangqing.056.jpeg`,
      `${basePath}/images/zhuhai_xiangqing.057.jpeg`,
      `${basePath}/images/zhuhai_xiangqing.058.jpeg`,
      `${basePath}/images/zhuhai_xiangqing.059.jpeg`,
      `${basePath}/images/zhuhai_xiangqing.060.jpeg`,
      `${basePath}/images/zhuhai_xiangqing.061.jpeg`,
    ],
  },
  {
    id: 5,
    slug: 'pingshan-grand-theatre',
    imageSrc: `${basePath}/images/dajuyuan_banner.076.jpeg`,
    title: '坪山大剧院',
    category: '坪山大剧院',
    categoryKey: 'branding',
    layoutType: 'branding',
    client: 'Pingshan Grand Theatre',
    year: '2023',
    services: ['Brand Design', 'Opening Exhibition Planning', 'Event Visuals'],
    overview:
      '坪山大剧院坐落于坪山文化中心南区，是一个以“戏剧方盒”理念打造的复合型表演艺术中心。品牌设计围绕开放、包容与城市公共性展开，结合建筑的几何秩序与公共步道空间，构建剧院在票务、导视、宣传物料与数字端的统一识别体系。开幕式展览与活动策划以“艺术介入城市”为核心叙事，串联公众漫游动线与剧场内外空间体验。',
    challenge:
      '在大型文化设施的运营初期，需要兼顾剧场专业度与公共文化服务的可达性；如何将建筑的“戏剧方盒”空间语言转译为具有延展性的视觉系统，并在多场景（票务、导视、展陈、线上传播）保持高一致性与高可见度。',
    solution:
      '以公共步道的流线意象与剧院木质“核心体量”为设计母题，建立几何化的超级图形与模块化版式体系；色彩以戏剧红、城市灰与高可见度安全色为主，适配室内外复合环境；开幕式展览策划以“城市文化节点”方法组织节目编排与动线设计，形成“到达—驻足—参与—共鸣”的体验闭环，提升品牌识别与到场参与率。（建筑背景参考：OPEN Architecture 的“戏剧方盒”与公共步道体系；剧院职能参考：坪山区政府与 Eyeshenzhen 的剧院介绍）',
    gallery: [
      `${basePath}/images/dajuyuan_xiangqing.063.jpeg`,
      `${basePath}/images/dajuyuan_xiangqing.064.jpeg`,
      `${basePath}/images/dajuyuan_xiangqing.065.jpeg`,
      `${basePath}/images/dajuyuan_xiangqing.066.jpeg`,
      `${basePath}/images/dajuyuan_xiangqing.067.jpeg`,
      `${basePath}/images/dajuyuan_xiangqing.068.jpeg`,
      `${basePath}/images/dajuyuan_xiangqing.069.jpeg`,
      `${basePath}/images/dajuyuan_xiangqing.070.jpeg`,
      `${basePath}/images/dajuyuan_xiangqing.071.jpeg`,
      `${basePath}/images/dajuyuan_xiangqing.072.jpeg`,
      `${basePath}/images/dajuyuan_xiangqing.073.jpeg`,
      `${basePath}/images/dajuyuan_xiangqing.074.jpeg`,
      `${basePath}/images/dajuyuan_xiangqing.075.jpeg`,
      `${basePath}/images/dajuyuan_xiangqing.077.jpeg`,
    ],
  },
  {
    id: 6,
    slug: 'sungang-center',
    imageSrc: `${basePath}/images/sungang_banner.jpeg`,
    title: '深圳笋岗中心',
    category: '华润置地',
    categoryKey: 'branding',
    layoutType: 'branding',
    client: 'CR Land / 华润置地',
    year: '2024',
    services: ['Brand Design', 'Space Branding', 'Wayfinding System'],
    overview:
      '深圳笋岗中心位于罗湖笋岗片区核心，是华润置地主导的城市更新重点项目。品牌设计以“仓到场景”的转译为线索，将笋岗的“中华第一仓”历史与当代市集型商业（万象食家）相融合，构建在商业街区、办公、住宅与公共广场之间可扩展的统一识别系统；视觉语言强调工业记忆的结构性与公共空间的开放性，在导视、宣传物料与数字端形成一致表达。',
    challenge:
      '在大型片区更新中，需要兼顾历史记忆的保留与新业态的活力；如何将“仓储遗址—市集型商业—复合公共空间”的多维场景用一个可延展的品牌系统串联，并与建筑立面与公共天幕的几何秩序保持协调。',
    solution:
      '以“仓格网 + 流线”为核心母题系统化构建：从旧仓库货架矩阵与城市步行流线抽象出几何超级图形，建立模块化版式与可变识别；色彩以工业橙、城市灰与高可见度安全黄为主，兼容室内外标识；导视围绕万象食家入口及水景广场组织序列，形成“到达—识别—漫游—参与”的体验闭环，强化商业街区的可达性与品牌辨识。（背景参考：10 Design 关于“笋岗中心·万象食家”的建筑与场所叙述；笋岗片区历史与更新定位参考罗湖区公开资料）',
    gallery: [
      `${basePath}/images/sungang_xiangqing.079.jpeg`,
      `${basePath}/images/sungang_xiangqing.081.jpeg`,
      `${basePath}/images/sungang_xiangqing.082.jpeg`,
      `${basePath}/images/sungang_xiangqing.083.jpeg`,
      `${basePath}/images/sungang_xiangqing.084.jpeg`,
      `${basePath}/images/sungang_xiangqing.085.jpeg`,
      `${basePath}/images/sungang_xiangqing.086.jpeg`,
      `${basePath}/images/sungang_xiangqing.087.jpeg`,
      `${basePath}/images/sungang_xiangqing.088.jpeg`,
      `${basePath}/images/sungang_xiangqing.089.jpeg`,
      `${basePath}/images/sungang_xiangqing.090.jpeg`,
      `${basePath}/images/sungang_xiangqing.091.jpeg`,
      `${basePath}/images/sungang_xiangqing.092.jpeg`,
      `${basePath}/images/sungang_xiangqing.093.jpeg`,
      `${basePath}/images/sungang_xiangqing.094.jpeg`,
      `${basePath}/images/sungang_xiangqing.095.jpeg`,
      `${basePath}/images/sungang_xiangqing.096.jpeg`,
      `${basePath}/images/sungang_xiangqing.097.jpeg`,
      `${basePath}/images/sungang_xiangqing.098.jpeg`,
      `${basePath}/images/sungang_xiangqing.099.jpeg`,
      `${basePath}/images/sungang_xiangqing.100.jpeg`,
      `${basePath}/images/sungang_xiangqing.101.jpeg`,
      `${basePath}/images/sungang_xiangqing.102.jpeg`,
    ],
  },
  {
    id: 7,
    slug: 'yutong-bus',
    imageSrc: `${basePath}/images/yutong_banner.jpeg`,
    title: '宇通客车',
    category: '宇通客车',
    categoryKey: 'branding',
    layoutType: 'branding',
    client: 'Yutong Bus / 宇通客车股份有限公司',
    year: '2021',
    services: ['Brand Design', 'VI System', 'Communication Materials'],
    overview:
      '宇通客车作为全球领先的客车制造企业，品牌视觉体系围绕“可信赖的工业科技与以人为本的公共出行”展开。系统以品牌识别的蓝色弧形元素为核心，兼顾新能源与智慧出行叙事，统一在企业传播、产品沟通与服务端触点的应用规范中，提升国际化识别与沟通效率。（参考：宇通官网“品牌”页面对品牌价值与传播的阐述；宇通获红点品牌与传达设计奖信息）',
    challenge:
      '在多品类、跨区域的全球化传播环境中，既要保持工业品牌的稳健与专业，又需体现新能源与数字化的创新气质；如何以“蓝色弧形超级符号”为核心，在车辆、展陈、物料与数字端实现一致且可扩展的识别系统。',
    solution:
      '以品牌弧形母题重构视觉语言：建立基于弧形几何与网格的模块化版式，规范色彩以“宇通蓝”为主、辅以中性灰与高可见度安全色；在产品与服务触点导入统一的图文体系与图标库，形成“可靠—高效—创新”的品牌感知闭环；并在新能源车型与智能车队管理的传播中强化科技叙事与国际化语境。（参考：宇通品牌页的形象/经济价值陈述；logo三弧形象征的行业解读与国际获奖信息）',
    gallery: [
      `${basePath}/images/yutong_xiangqing.104.jpeg`,
      `${basePath}/images/yutong_xiangqing.105.jpeg`,
      `${basePath}/images/yutong_xiangqing.106.jpeg`,
      `${basePath}/images/yutong_xiangqing.107.jpeg`,
      `${basePath}/images/yutong_xiangqing.108.jpeg`,
      `${basePath}/images/yutong_xiangqing.109.jpeg`,
      `${basePath}/images/yutong_xiangqing.110.jpeg`,
      `${basePath}/images/yutong_xiangqing.111.jpeg`,
      `${basePath}/images/yutong_xiangqing.112.jpeg`,
      `${basePath}/images/yutong_xiangqing.113.jpeg`,
      `${basePath}/images/yutong_xiangqing.114.jpeg`,
      `${basePath}/images/yutong_xiangqing.115.jpeg`,
      `${basePath}/images/yutong_xiangqing.116.jpeg`,
      `${basePath}/images/yutong_xiangqing.118.jpeg`,
      `${basePath}/images/yutong_xiangqing.119.jpeg`,
      `${basePath}/images/yutong_xiangqing.120.jpeg`,
      `${basePath}/images/yutong_xiangqing.121.jpeg`,
      `${basePath}/images/yutong_xiangqing.122.jpeg`,
      `${basePath}/images/yutong_xiangqing.123.jpeg`,
      `${basePath}/images/yutong_xiangqing.124.jpeg`,
      `${basePath}/images/yutong_xiangqing.125.jpeg`,
      `${basePath}/images/yutong_xiangqing.126.jpeg`,
      `${basePath}/images/yutong_xiangqing.127.jpeg`,
    ],
  },
  {
    id: 8,
    slug: 'china-film-art-association',
    imageSrc: `${basePath}/images/meishuxuehui_banner.jpeg`,
    title: '中国电影美术学会',
    category: '中国电影美术学会',
    categoryKey: 'branding',
    layoutType: 'branding',
    client: 'China Film Art Direction Academy / 中国电影美术学会',
    year: '2024',
    services: ['Brand Design', 'VI System', 'Event Visuals'],
    overview:
      '中国电影美术学会作为国家一级学会，承担行业学术交流、人才培养与美术艺术推广的桥梁与纽带。品牌设计以“影像框架与光域”作为核心母题，构建从协会标识、会议活动、奖项推介到出版物与数字端的统一识别体系；通过几何化的画幅比例与开合式光圈结构，兼顾权威性与当代性，提升跨触点的识别与传播效率。（参考：CFADA 官网与百科对组织性质与职责的描述）',
    challenge:
      '协会触点多元（大会、年会、展览、工作委员会、出版物与数字平台），需要在庄重权威与现代传播之间取得平衡；如何以“电影美术”的核心语汇，建立可扩展、可复用且在不同载体上保持一致性的品牌系统。',
    solution:
      '以“画幅/光域”建立识别系统：提炼 1.85:1、2.39:1 等常见画幅的几何关系为版式基底，结合开合式光圈与投影形态形成可变超级图形；色彩以经典黑/金与中性灰为主，适配学术与展陈场景；为活动物料、导视、网页与社媒建立统一的排版与图标库，形成“学术—传播—参与”的闭环体验。（参考：官网与百科信息中的学术职责与活动类型）',
    gallery: [
      `${basePath}/images/meishuxuehui_xiangqing.130.jpeg`,
      `${basePath}/images/meishuxuehui_xiangqing.131.jpeg`,
      `${basePath}/images/meishuxuehui_xiangqing.132.jpeg`,
      `${basePath}/images/meishuxuehui_xiangqing.133.jpeg`,
      `${basePath}/images/meishuxuehui_xiangqing.134.jpeg`,
      `${basePath}/images/meishuxuehui_xiangqing.135.jpeg`,
      `${basePath}/images/meishuxuehui_xiangqing.136.jpeg`,
    ],
  },
  {
    id: 9,
    slug: 'wenzhou-bank',
    imageSrc: `${basePath}/images/wenzhoubank_banner.jpeg`,
    title: '温州银行',
    category: '温州银行',
    categoryKey: 'branding',
    layoutType: 'branding',
    client: 'Wenzhou Bank',
    year: '2023',
    services: ['Brand Upgrade', 'Branch SI System', 'Wayfinding'],
    overview:
      '温州银行作为区域性城市商业银行，品牌与门店形象围绕“专业可信、贴近城市生活”的定位升级。以统一的门头体系、橱窗传播与营业大厅导视为核心，将服务动线、等候区、智能设备区等功能区的视觉表达标准化，提升识别效率与客户体验；形象系统兼顾跨城市网点的一致性与本地化适配。（参考：温州银行百科资料对机构性质与网点布局的介绍，结合行业通用的城商行门店 SI/导视规范思路）',
    challenge:
      '跨区域多网点的门店形象需要兼顾统一与差异化；如何在合规框架、施工可行性与成本控制下，实现高识别度的门头、立面与室内导视标准，并在人流密集时保持清晰的服务分流与到达体验。',
    solution:
      '以模块化 SI 体系提升落地效率：门头采用标准化格栅与发光字结构，橱窗传播统一画幅与信息层级；室内以导视基线与颜色层级组织功能区，引导“到达—咨询—办理—离开”的动线；材质选用耐候金属/玻璃与木饰面，平衡金融专业感与亲和度；建立图标库与版式规范，支持各类活动物料快速复用与统一呈现。（参考：城商行 SI/导视设计规范与落地经验）',
    gallery: [
      `${basePath}/images/wenzhoubank_xiangqing.138.jpeg`,
      `${basePath}/images/wenzhoubank_xiangqing.139.jpeg`,
      `${basePath}/images/wenzhoubank_xiangqing.140.jpeg`,
      `${basePath}/images/wenzhoubank_xiangqing.141.jpeg`,
      `${basePath}/images/wenzhoubank_xiangqing.142.jpeg`,
      `${basePath}/images/wenzhoubank_xiangqing.143.jpeg`,
      `${basePath}/images/wenzhoubank_xiangqing.144.jpeg`,
      `${basePath}/images/wenzhoubank_xiangqing.145.jpeg`,
      `${basePath}/images/wenzhoubank_xiangqing.146.jpeg`,
      `${basePath}/images/wenzhoubank_xiangqing.148.jpeg`,
    ],
  },
  {
    id: 10,
    slug: 'yibao-magic-drink',
    imageSrc: `${basePath}/images/yibao_banner.jpeg`,
    title: '怡宝魔力',
    category: '怡宝',
    categoryKey: 'package',
    layoutType: 'packaging',
    client: "C'estbon / 华润怡宝",
    year: '2024',
    services: ['Packaging Design', 'Flavor System', 'POS Materials'],
    overview:
      '“怡宝魔力”运动饮料围绕“快速补给与高识别度”进行包装系统设计。以动感线性与功能信息层级为核心，建立瓶身标签的模块化版式与口味色彩体系；在货架与运动场景实现高可见度与清晰沟通，强化品牌与产品功效的直观联想。（产品功能背景参考：华润饮料对魔力运动饮料的官方描述）',
    challenge:
      '在便利店与运动场景的高竞争环境中，如何兼顾口味区分、功能信息的快速读取与品牌一致性；同时满足多规格、不同渠道的印刷与材质适配。',
    solution:
      '以“能量流线 + 功能信息栈”构建包装：提炼速度感的流线图形为主视觉，口味以高纯度配色分层；信息以成分模块（电解质、氨基酸、GLU、维生素B6）与容量、营养表形成统一栈；瓶身与礼促物料统一图标库与版式规范，提升复用效率与渠道一致性。（参考：华润饮料官网对魔力运动饮料的配方与定位描述；行业快消包装的口味分层与信息分栈实践）',
    gallery: [
      `${basePath}/images/yibao_xiangqing.151.jpeg`,
      `${basePath}/images/yibao_xiangqing.152.jpeg`,
      `${basePath}/images/yibao_xiangqing.154.jpeg`,
    ],
  },
  {
    id: 11,
    slug: 'jialinshan-natural-mineral-water',
    imageSrc: `${basePath}/images/jialinshan_banner.jpeg`,
    title: '加林山应用天然矿泉水',
    category: '加林山',
    categoryKey: 'package',
    layoutType: 'packaging',
    client: 'Jialinshan / 华润怡宝',
    year: '2010',
    services: ['Packaging Design', 'Label System', 'Bottle Graphics'],
    overview:
      '加林山应用天然矿泉水以“水源纯净与矿物质价值”作为核心叙事，包装设计强调产地故事与成分信息的清晰读取。通过极简的版式与高透材质呈现自然感，辅以矿物质参数表与水滴几何图形，建立统一的瓶标体系与高端化的视觉语言。（背景参考：珠海加林山矿泉水企业与水源信息；华润怡宝于2010年全资收购加林山品牌的公开资料）',
    challenge:
      '在高端矿泉水赛道，需要以简洁而有辨识度的语言传达“天然、健康、可信赖”；同时满足不同渠道与批次的印刷工艺稳定性与可持续材料选用。',
    solution:
      '以“水源叙事 + 几何水滴 + 成分信息栈”构建视觉系统：瓶标主视觉采用清透蓝绿的水域配色，版式以画幅网格对齐矿物质参数与产地信息；瓶身图形以水滴/山体线性抽象，形成系列化识别；材质选用高透 PET 与环保油墨，兼顾触感与环保属性。（参考：企业与行业资料对加林山水源与成分的介绍）',
    gallery: [
      `${basePath}/images/jialinshan_xiangqing.157.jpeg`,
      `${basePath}/images/jialinshan_xiangqing.158.jpeg`,
    ],
  },
  {
    id: 12,
    slug: 'shenzhen-press-group',
    imageSrc: `${basePath}/images/shenzhenbaoye_banner.jpeg`,
    title: '深圳报业',
    category: '深圳报业集团',
    categoryKey: 'space',
    layoutType: 'event',
    client: 'Shenzhen Press Group',
    year: '2021',
    services: ['Wayfinding Design', 'Environmental Graphics', 'Signage System'],
    overview:
      '深圳报业集团办公园区的空间导视设计以“新闻编辑的秩序与公共可读性”为核心，围绕塔楼与裙楼的多入口、多功能空间，建立统一的识别与动线系统。视觉语言参考建筑立面的“活字印刷”灵感，以栅格与版式结构组织楼层编号、功能区与访客路径，提升到达效率与跨部门协作的清晰度。（参考：深圳报业集团新媒体大厦的建筑立面描述与集团公开信息）',
    challenge:
      '园区多入口、多流线，人员类型复杂（员工、访客、媒体团队、配送），需兼顾办公高效与公共性形象；如何在建筑立面语言与室内信息系统之间建立一致表达，并确保不同时段与不同光线条件下的可见度。',
    solution:
      '以“编辑栅格 + 清晰层级”构建导视系统：入口、门厅、垂直交通与楼层节点采用统一编号体系与方向指引；色彩以黑白灰为基调，局部引入识别色分层功能区；材质结合金属、玻璃与发光材，适配不同环境与光照；为公共空间与展陈区建立信息版式与图标库，保证跨触点的一致性与可扩展性。（参考：导视系统设计的通用原则与园区功能信息）',
    gallery: [
      `${basePath}/images/shenzhenbaoye_xiangqing.162.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.163.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.164.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.165.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.166.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.167.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.168.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.169.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.170.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.171.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.172.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.173.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.174.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.175.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.176.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.177.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.178.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.179.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.180.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.181.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.182.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.183.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.184.jpeg`,
      `${basePath}/images/shenzhenbaoye_xiangqing.185.jpeg`,
    ],
  },
  {
    id: 13,
    slug: 'dapeng-xichong-greenway',
    imageSrc: `${basePath}/images/dapenglvdao_banner.jpeg`,
    title: '大鹏西涌绿道',
    category: '大鹏新区',
    categoryKey: 'space',
    layoutType: 'event',
    client: 'Dapeng New District',
    year: '2022',
    services: ['Wayfinding Design', 'Illustration System', 'UI Design'],
    overview:
      '大鹏西涌绿道以“山海连城”的慢行体验为主轴，导视、插画与数字端 UI 形成一体化的体验系统。导视围绕沿海步道与休闲节点组织方向与距离标识，插画以海洋生态与运动场景为母题，构建亲和的公共视觉；数字端提供路线规划、打卡与活动信息，连结线下路径与线上服务。（参考：深圳绿道与大鹏新区绿道系统的公开资料）',
    challenge:
      '绿道沿海且跨场景，需兼顾抗腐蚀耐候性与高可见度；如何在多点分布的节点上保持系统一致，同时为数字端与线下导视建立统一的图形与信息层级。',
    solution:
      '以“海岸配色 + 路径图形 + 功能层级”构建系统：色彩以海蓝、沙滩米与植被绿为基调，提升与环境的融入度与可视性；路径图形以等距折线与圆角节点抽象路线；信息层级以距离、方向、活动、生态科普四类模块组织；UI 以同源的图标库与插画风格实现线上线下统一。（参考：深圳绿道资料与多功能绿道的系统化设计实践）',
    gallery: [
      `${basePath}/images/dapenglvdao_xiangqing.187.jpeg`,
      `${basePath}/images/dapenglvdao_xiangqing.189.jpeg`,
      `${basePath}/images/dapenglvdao_xiangqing.190.jpeg`,
      `${basePath}/images/dapenglvdao_xiangqing.191.jpeg`,
      `${basePath}/images/dapenglvdao_xiangqing.192.jpeg`,
      `${basePath}/images/dapenglvdao_xiangqing.193.jpeg`,
      `${basePath}/images/dapenglvdao_xiangqing.194.jpeg`,
      `${basePath}/images/dapenglvdao_xiangqing.195.jpeg`,
      `${basePath}/images/dapenglvdao_xiangqing.196.jpeg`,
      `${basePath}/images/dapenglvdao_xiangqing.197.jpeg`,
      `${basePath}/images/dapenglvdao_xiangqing.198.jpeg`,
      `${basePath}/images/dapenglvdao_xiangqing.199.jpeg`,
      `${basePath}/images/dapenglvdao_xiangqing.200.jpeg`,
      `${basePath}/images/dapenglvdao_xiangqing.201.jpeg`,
      `${basePath}/images/dapenglvdao_xiangqing.202.jpeg`,
    ],
  },
  {
    id: 14,
    slug: 'pingshan-zhengshan-jia',
    imageSrc: `${basePath}/images/zhengjiashan_banner.jpeg`,
    title: '坪山正山甲',
    category: '坪山正山甲',
    categoryKey: 'space',
    layoutType: 'event',
    client: 'Pingshan District',
    year: '2023',
    services: ['Wayfinding Design', 'Signage System', 'Environmental Graphics'],
    overview:
      '项目围绕片区公共空间与社区路网，建立清晰的到达与通行体系；以地形与街巷肌理为线索，构建兼具地域气质的导视语言。',
    challenge:
      '场地存在高差、巷道密集与多入口的复杂流线，居民与游客混合使用；需在不同光照与天气条件下兼顾可见度与耐久性。',
    solution:
      '以分层编号与方向引导构建体系：入口、节点与楼栋采用统一版式与编号规则；色彩提取在地文化的砖红、石灰白与植被绿，材质采用镀锌金属与耐候涂层；新增步行导览地图与里程标识，提升慢行清晰度与安全性。',
    gallery: [
      `${basePath}/images/zhengjiashan_xiangqing.204.jpeg`,
      `${basePath}/images/zhengjiashan_xiangqing.206.jpeg`,
      `${basePath}/images/zhengjiashan_xiangqing.207.jpeg`,
      `${basePath}/images/zhengjiashan_xiangqing.208.jpeg`,
      `${basePath}/images/zhengjiashan_xiangqing.209.jpeg`,
      `${basePath}/images/zhengjiashan_xiangqing.210.jpeg`,
    ],
  },
  {
    id: 15,
    slug: 'guangming-huanle-tianyuan',
    imageSrc: `${basePath}/images/huanletianyuan_banner.jpeg`,
    title: '光明欢乐田园',
    category: '光明欢乐田园',
    categoryKey: 'space',
    layoutType: 'event',
    client: 'Guangming District',
    year: '2023',
    services: ['Wayfinding Design', 'Illustration System'],
    overview:
      '在大尺度田园景观中，导视与插画系统服务慢行游园体验；围绕农耕互动与科普场景，建立亲和、可读的公共视觉。',
    challenge:
      '园区跨度大、季节性变化明显，游线与功能点分布广；需在自然环境中保持高识别度同时不突兀，兼顾不同人群与儿童友好。',
    solution:
      '以田园配色与木构材质提升环境融入度；路径、功能与安全提示模块化图形化；建立儿童友好的插画体系用于科普与互动，入口至园内采用分级导引与二维码导览统一版式与图标库。',
    gallery: [
      `${basePath}/images/huanletianyuan_banner.jpeg`,
      `${basePath}/images/huanletianyuan_xiangqing.212.jpeg`,
      `${basePath}/images/huanletianyuan_xiangqing.214.jpeg`,
    ],
  },
  {
    id: 16,
    slug: 'zhuoyue-group',
    imageSrc: `${basePath}/images/zhuoyuejituan_banner.jpeg`,
    title: '卓越集团',
    category: '卓越集团',
    categoryKey: 'space',
    layoutType: 'event',
    client: 'Excellence Group',
    year: '2022',
    services: ['Corporate Wayfinding', 'Environmental Graphics'],
    overview:
      '企业园区与楼宇导视升级，统一入口、门厅、垂直交通与楼层节点的识别体系，提升访客与员工的到达效率与空间清晰度。',
    challenge:
      '多楼栋与多业务线并存，空间更新频繁；需兼顾企业形象与运营灵活性，并确保不同触点与时段的高可见度与一致表达。',
    solution:
      '以企业主色与中性材质建立识别基底，采用模块化版式与可替换信息载体；双语与无障碍信息标准统一，导线图与楼层功能地图使用统一模板，夜间发光与低照环境的可视性优化。',
    gallery: [
      `${basePath}/images/zhuoyuejituan_xiangqing.216.jpeg`,
      `${basePath}/images/zhuoyuejituan_xiangqing.218.jpeg`,
      `${basePath}/images/zhuoyuejituan_xiangqing.219.jpeg`,
      `${basePath}/images/zhuoyuejituan_xiangqing.220.jpeg`,
      `${basePath}/images/zhuoyuejituan_xiangqing.221.jpeg`,
      `${basePath}/images/zhuoyuejituan_xiangqing.222.jpeg`,
      `${basePath}/images/zhuoyuejituan_xiangqing.223.jpeg`,
      `${basePath}/images/zhuoyuejituan_xiangqing.224.jpeg`,
    ],
  },
  {
    id: 17,
    slug: 'icarer-family',
    imageSrc: `${basePath}/images/icecream_banner.jpeg`,
    title: 'ICARER FAMILY',
    category: 'ICARER FAMILY',
    categoryKey: 'ip',
    layoutType: 'branding',
    client: 'ICARER FAMILY',
    year: '2021',
    services: ['IP Design', 'Character System', 'Illustration'],
    overview:
      '为 ICARER FAMILY 打造可持续的品牌 IP 形象与角色体系，覆盖零售终端与线上社媒传播场景，实现高识别与强情感连接。',
    challenge:
      '目标人群以年轻与泛家庭用户为主，需在不同材质与载体上保持一致性与可拓展性，同时避免同质化与审美疲劳。',
    solution:
      '以核心角色的性格设定与基本形体为起点，建立表情与姿态库；色彩与服饰模块化可替换，形成系列化扩展；定义场景插画与衍生品应用规范，并在社媒贴纸与表情包、线下展陈与快闪装置中形成统一体验。',
    gallery: [
      `${basePath}/images/icecream_xiangqing.227.jpeg`,
      `${basePath}/images/icecream_xiangqing.229.jpeg`,
      `${basePath}/images/icecream_xiangqing.230.jpeg`,
      `${basePath}/images/icecream_xiangqing.231.jpeg`,
      `${basePath}/images/icecream_xiangqing.232.jpeg`,
      `${basePath}/images/icecream_xiangqing.233.jpeg`,
      `${basePath}/images/icecream_xiangqing.234.jpeg`,
      `${basePath}/images/icecream_xiangqing.235.jpeg`,
      `${basePath}/images/icecream_xiangqing.236.jpeg`,
      `${basePath}/images/icecream_xiangqing.237.jpeg`,
      `${basePath}/images/icecream_xiangqing.238.jpeg`,
      `${basePath}/images/icecream_xiangqing.239.jpeg`,
      `${basePath}/images/icecream_xiangqing.240.jpeg`,
    ],
  },
  {
    id: 18,
    slug: 'wenzhou-bank-ip',
    imageSrc: `${basePath}/images/wenzhoubank_ip_banner.jpeg`,
    title: '温州银行 IP',
    category: '温州银行',
    categoryKey: 'ip',
    layoutType: 'branding',
    client: 'Wenzhou Bank',
    year: '2022',
    services: ['IP Design', 'Mascot System', 'Visual Identity'],
    overview:
      '围绕金融服务触点打造亲和的 IP 吉祥物体系，在网点空间、移动端与公益活动中提升沟通效率与品牌友好度。',
    challenge:
      '金融场景需兼顾专业可信与亲和友好；不同触点（网点、APP、海报、周边）需统一表达，并适配多种材质与工艺。',
    solution:
      '以温州地域文化元素为灵感进行角色设定，建立四季与节日主题的扩展套件；在网点导视、儿童金融课堂与公益主题活动中多场景应用，并制定线下材质与安全规范以确保信息不被遮挡。',
    gallery: [
      `${basePath}/images/wenzhoubank_ip_xiangqing.243.jpeg`,
      `${basePath}/images/wenzhoubank_ip_xiangqing.244.jpeg`,
      `${basePath}/images/wenzhoubank_ip_xiangqing.245.jpeg`,
      `${basePath}/images/wenzhoubank_ip_xiangqing.246.jpeg`,
      `${basePath}/images/wenzhoubank_ip_xiangqing.247.jpeg`,
      `${basePath}/images/wenzhoubank_ip_xiangqing.248.jpeg`,
      `${basePath}/images/wenzhoubank_ip_xiangqing.249.jpeg`,
    ],
  },
];

export const getProjectBySlug = (slug: string) => {
  return PROJECT_DATA.find((p) => p.slug === slug);
};