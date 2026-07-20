export const site = {
  title: 'Provider-Evo',
  tagline: '统一 AI 模型网关与插件化运行时',
  version: '2.2.297',
  github: 'https://github.com/Provider-Evo/provider-core',
  docsRepo: 'https://github.com/Provider-Evo/docs',
  pluginMarket: 'https://github.com/Provider-Evo/plugin-repo',
};

export type NavLink = { text: string; href: string; external?: boolean };

export type SidebarGroup = {
  text: string;
  collapsed?: boolean;
  items: NavLink[];
};

export const topNav: NavLink[] = [
  { text: '首页', href: '/' },
  { text: '用户手册', href: '/manual/quickstart/' },
  { text: '插件', href: '/plugins/' },
  { text: '开发', href: '/develop/' },
  { text: '发版', href: '/release/' },
  { text: 'FAQ', href: '/faq/' },
];

export const homeFeatures = [
  {
    title: '插件化平台',
    details: 'platform / fncall / webui / coplan 四类插件，单插件失败不阻断网关启动',
  },
  {
    title: '统一 API',
    details: 'OpenAI 与 Anthropic 兼容接口，调度引擎自动选路与容错重试',
  },
  {
    title: '内置 WebUI',
    details: '插件市场、配置、终端与统计面板，风格与本文档站一致',
  },
  {
    title: '热重载',
    details: 'MaiBot 式单插件 on_unload → 清缓存 → on_load，开发迭代无需整进程重启',
  },
  {
    title: '插件市场',
    details: 'plugin-repo 索引 + WebUI Git URL 安装，overlay 同步到 provider-core',
  },
  {
    title: 'dev 版本线',
    details: '2.2.xxx 补丁号以 dev 为准，main 合并后追平',
  },
];

export const sidebars: Record<string, SidebarGroup[]> = {
  '/manual/': [
    {
      text: '入门',
      items: [
        { text: '快速开始', href: '/manual/quickstart/' },
        { text: '工作区结构', href: '/manual/workspace/' },
        { text: 'WebUI 概览', href: '/manual/webui/' },
      ],
    },
  ],
  '/plugins/': [
    {
      text: '用户',
      items: [
        { text: '插件概览', href: '/plugins/' },
        { text: '市场与安装', href: '/plugins/market/' },
      ],
    },
    {
      text: '开发者',
      items: [
        { text: '开发工作流', href: '/plugins/develop/' },
        { text: 'Manifest 规范', href: '/plugins/manifest/' },
      ],
    },
  ],
  '/develop/': [
    {
      text: '核心开发',
      items: [
        { text: '开发指南', href: '/develop/' },
        { text: 'SDK 与契约', href: '/develop/sdk/' },
        { text: '测试与 CI', href: '/develop/testing/' },
      ],
    },
  ],
  '/release/': [
    {
      text: '版本',
      items: [{ text: '发版历史', href: '/release/' }],
    },
  ],
  '/faq/': [
    {
      text: '常见问题',
      items: [
        { text: 'FAQ 总览', href: '/faq/' },
        { text: '部署与启动', href: '/faq/deploy/' },
        { text: '插件排错', href: '/faq/plugins/' },
      ],
    },
  ],
};

export function resolveSidebar(pathname: string): SidebarGroup[] {
  const prefixes = Object.keys(sidebars).sort((a, b) => b.length - a.length);
  for (const prefix of prefixes) {
    if (pathname.includes(prefix.replace(/\/$/, ''))) {
      return sidebars[prefix];
    }
  }
  return sidebars['/manual/'];
}

export function flattenSidebarLinks(groups: SidebarGroup[]): NavLink[] {
  const out: NavLink[] = [];
  for (const group of groups) {
    for (const item of group.items) {
      out.push(item);
    }
  }
  return out;
}

export const searchIndex: NavLink[] = [
  { text: '快速开始', href: '/manual/quickstart/' },
  { text: '工作区结构', href: '/manual/workspace/' },
  { text: 'WebUI 概览', href: '/manual/webui/' },
  { text: '插件概览', href: '/plugins/' },
  { text: '市场与安装', href: '/plugins/market/' },
  { text: '插件开发工作流', href: '/plugins/develop/' },
  { text: 'Manifest 规范', href: '/plugins/manifest/' },
  { text: '开发指南', href: '/develop/' },
  { text: 'SDK 与契约', href: '/develop/sdk/' },
  { text: '测试与 CI', href: '/develop/testing/' },
  { text: '发版历史', href: '/release/' },
  { text: 'FAQ 总览', href: '/faq/' },
  { text: '部署与启动', href: '/faq/deploy/' },
  { text: '插件排错', href: '/faq/plugins/' },
];
