import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: ' คู่มือการใช้งานระบบจัดการแบบฟอร์ม (XCHO)',
  tagline: 'ยินดีต้อนรับสู่เว็บไซต์คู่มือการใช้งานระบบจัดการแบบฟอร์ม (XCHO)',
  favicon: 'img/logo-without-text.svg',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  organizationName: 'facebook',
  projectName: 'docusaurus',
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'tn',
    locales: ['tn'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'คู่มือการใช้งาน XCHO',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-without-text.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'วิธีการใช้งาน',
        },
        {
          to: '/creator', // ลิ้งก์ไปยังหน้าใหม่ที่สร้างใน src/pages หรือ docs
          label: 'ผู้จัดทำ', // ชื่อที่จะปรากฏบน Header
          position: 'left',   // อยู่ฝั่งซ้ายข้างๆ "วิธีการใช้งาน"
        },
      ],
    },

    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;