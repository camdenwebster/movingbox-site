// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MovingBox Documentation',
  tagline: 'Turn Photos into Peace of Mind',
  favicon: 'img/favicon.ico',
  
  // Set the production url of your site here
  url: 'https://www.movingbox.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/docs/',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/movingbox-social-card.png',
      navbar: {
        title: 'MovingBox',
        logo: {
          alt: 'MovingBox Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://www.movingbox.ai',
            label: 'Back to MovingBox',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started/installation',
              },
              {
                label: 'Core Features',
                to: '/core-features/ai-photo-recognition',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'TestFlight Beta',
                href: 'https://testflight.apple.com/join/udJ6tSQ8',
              },
              {
                label: 'Report Issues',
                href: 'https://github.com/camdenwebster/MovingBox/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: 'https://www.movingbox.ai',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/camdenwebster/MovingBox',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MovingBox. Built with Docusaurus.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;