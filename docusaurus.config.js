// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "IOMETE",
  tagline: "First cloud-prem lakehouse",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://iomete.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  // scripts: ["/js/heap.js"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/docs/",
          sidebarPath: "./sidebars.js",
          breadcrumbs: false,
          // autoCollapseCategories: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogSidebarCount: 0,
          postsPerPage: "ALL",
          showReadingTime: true,
          // blogListComponent: '/blog/index.js',
          blogTagsPostsComponent: "/src/theme/BlogListPage/index.js",
          blogTitle: "IOMETE Blog",
          blogDescription:
            "Modern lakehouse platform. Save 5x over expensive alternatives | Built on Apache Iceberg and Apache Spark | Cloud, on premise and hybrid solutions.",
        },

        theme: {
          customCss: ["./src/css/custom.scss", require.resolve("./node_modules/@ionic-internal/ionic-ds/dist/tokens/tokens.css")],
        },
        googleTagManager: {
          containerId: "GTM-W4ZH33W",
        },
        // gtag: {
        //   trackingID: "G-YMX75JE2MY",
        //   anonymizeIP: false,
        // },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: [
            "/docs/tags/**",
            "/docs/data-policy/**",
            "/docs/user-guide/access-policy-management",
            "/docs/user-guide/serverless-spark-applications",
          ],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/iomete-docs-og.png',

      navbar: {
        // title: 'My Site',
        logo: {
          alt: "IOMETE",
          src: `/img/logo-black.svg`,
          srcDark: `/img/logo-white.svg`,
          href: "https://iomete.com",
          target: "_self",
          height: 32,
          width: 82,
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docs",
            position: "left",
            label: "Docs",
          },
          {
            type: "docSidebar",
            sidebarId: "guides",
            position: "left",
            label: "Guides",
          },
          // {
          //   to: "/glossary",
          //   position: "left",
          //   label: "Glossary",
          // },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/glossary", label: "Glossary", position: "left" },
          // { to: "https://iomete.com/blog", label: "Blog", position: "left", target: "_self" },
          {
            href: "https://api.iomete.com",
            label: "API",
            position: "right",
          },
          {
            href: "https://github.com/iomete",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      algolia: {
        appId: "A90PMTH5W5",
        apiKey: "3c9132c4cdf813a81e47299fde60c651",
        indexName: "iomete",
        contextualSearch: false,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["bash"],
      },
    }),
  plugins: [
    "docusaurus-plugin-sass",

    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/docs/data-security/overview",
            from: ["/docs/user-guide/access-policy-management", "/docs/data-policy/overview"],
          },
          {
            to: "/docs/data-security/access",
            from: ["/docs/data-policy/access"],
          },
          {
            to: "/docs/data-security/masking",
            from: ["/docs/data-policy/masking"],
          },
          {
            to: "/docs/data-security/row-level-filter",
            from: ["/docs/data-policy/row-level-filter"],
          },
          {
            to: "/docs/data-security/tag-based-access",
            from: ["/docs/data-policy/tag-based-access"],
          },
          {
            to: "/docs/data-security/tag-based-masking",
            from: ["/docs/data-policy/tag-based-masking"],
          },
          {
            to: "/docs/guides/spark-job/getting-started",
            from: "/docs/user-guide/serverless-spark-applications",
          },
          {
            to: "/docs/guides",
            from: "/docs/user-guide/storage-integrations",
          },
        ],
      },
    ],

    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "glossary",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "glossary",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./glossary",
        blogListComponent: "/src/theme/GlossaryListPage/index.js",
        postsPerPage: "ALL",
        showReadingTime: false,
      },
    ],
  ],
};

export default config;
