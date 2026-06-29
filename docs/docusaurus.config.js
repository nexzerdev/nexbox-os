// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nexbox OS',
  tagline: 'Offensive security distribution built on Kali Linux.',
  favicon: 'img/favicon-32x32.png',
  url: 'https://nexzerdev.github.io',
  baseUrl: '/nexbox-os/',
  organizationName: 'nexzerdev',
  projectName: 'nexbox-os',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  headTags: [
    { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/nexbox-os/img/favicon-16x16.png' } },
    { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/nexbox-os/img/favicon-32x32.png' } },
    { tagName: 'link', attributes: { rel: 'apple-touch-icon', sizes: '180x180', href: '/nexbox-os/img/apple-touch-icon.png' } },
    { tagName: 'link', attributes: { rel: 'manifest', href: '/nexbox-os/site.webmanifest' } },
    { tagName: 'meta', attributes: { name: 'theme-color', content: '#6faea0' } },
  ],
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
  presets: [
    ['classic', ({
      docs: {
        sidebarPath: './sidebars.js',
        editUrl: undefined,
      },
      blog: false,
      theme: { customCss: './src/css/custom.css' },
    })],
  ],
  themeConfig: ({
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Nexbox OS',
      logo: {
        alt: 'Nexzer Logo',
        src: 'img/nexzer-logo.png',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs' },
{ href: 'https://nexzer.org', label: 'nexzer.org', position: 'right' },
        { href: 'https://github.com/nexzerdev/nexbox-os', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Nexzer. Built on Kali Linux. For authorised use only.`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash', 'powershell'],
    },
  }),
};

export default config;
