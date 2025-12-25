// @ts-check
const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Spec-Driven Guide to Advanced Robotics',
  favicon: 'img/favicon.ico',

  // Change this to your actual Vercel or GitHub Pages URL
  url: 'https://h-nu-lyart.vercel.app',
  baseUrl: '/', // Set to '/' for Vercel, or '/PhysicalAi-Robotics-Book/' for GitHub Pages

  organizationName: 'PhysicalAI-Robotics', 
  projectName: 'PhysicalAi-Robotics-Book', 

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // EMERGENCY FIX: Reduced to English only to stop the build error
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/PhysicalAI-Robotics/PhysicalAi-Robotics-Book/tree/main/',
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Book',
          },
          {
            href: 'https://github.com/PhysicalAI-Robotics/PhysicalAi-Robotics-Book',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Modules',
            items: [
              { label: 'ROS 2', to: '/docs/module1-ros/intro' },
              { label: 'Digital Twin', to: '/docs/module2-digital-twin/intro' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
