// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Specmatic',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/specmatic-logo-round.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  markdown: {
    mermaid: true,
  },

  themes: [
    "@docusaurus/theme-mermaid",
  /** @type {any} */ ([
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        language: ["en"],
      },
    ]),
  ],

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  trailingSlash: true,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/specmatic/specmatic-documentation',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Specmatic',
        logo: {
          alt: 'My Site Logo',
          src: 'img/specmatic-logo-round.svg',
        },
        items: [
          {
            type: 'search',
            position: 'right'
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/specmatic/docs.specmatic.io.git',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: [
              '/backward_compatibility.html',
              '/backward_compatibility',
              '/documentation/backward_compatibility.html',
              '/documentation/backward_compatibility',
              '/documentation/tutorials/backward_compatibility.html',
              '/documentation/tutorials/backward_compatibility'
            ],
            to: '/docs/contract_driven_development/backward_compatibility/'
          },
          {
            from: [
              '/documentation/stubbing-database.html',
              '/documentation/stubbing_database.html',
              '/documentation/supported_protocols/jdbc.html',
            ],
            to: '/docs/supported_protocols/jdbc/',
          },
          {
            from: [
              '/documentation/soap.html',
              '/documentation/wsdl.html',
              '/documentation/supported_protocols/soap.html',
            ],
            to: '/docs/supported_protocols/soap/',
          }
        ],
      },
    ],
  ],
};

export default config;
