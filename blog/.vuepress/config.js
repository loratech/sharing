module.exports = {
  title: "L.O.R.A Sharing Hub",
  description: "An Organization of Students doing Research and Development in Robotics and Artificial Intelligence",
  theme: "@vuepress/theme-blog",
  head: [
    ['link', { rel: 'icon', href: '/android-chrome-512x512.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  plugins: [
    '@vuepress/active-header-links',
    [
      "@vuepress/medium-zoom",
      {
        selector: ".content__default img",
      }
    ],
    "@vuepress/last-updated",
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-157623673-1",
      },
    ],
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 12
      }
    ],
  ],
  themeConfig: {
    smoothScroll: true,
    pwa: true,
    paginationComponent: 'SimplePagination',
    feed: {
      canonical_base: 'https://sharing.loratech.org',
    },
    comment: {
      service: 'disqus',
      shortname: "mechafoss"
    },
    sitemap: {
      hostname: 'https://sharingloratech.netlify.app'
    },
    globalPagination: {
      lengthPerPage: '20',
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions;
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [{
        text: "About",
        link: "/about/",
      },
      {
        text: "Tags",
        link: "/tag/",
      },
      {
        text: "Login",
        link: "/login/",
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [{
          type: "facebook",
          link: "https://fb.com/loratech",
        },
        {
          type: "github",
          link: "https://github.com/loratech",
        },
        {
          type: "mail",
          link: "mailto:lora.rdtech@gmail.com",
        },
        {
          type: "youtube",
          link: "https://youtube.com/loratech",
        },
      ],
      copyright: [{
          text: "Terms & Conditions",
          link: "/terms-and-conditions",
        },
        {
          text: "L.O.R.A © 2020. All rights reserved.",
          link: "",
        },
      ],
    },
  },
};