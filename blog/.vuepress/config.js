module.exports = {
  title: "L.O.R.A Sharing Hub",
  description: "An Organization of Students doing Research and Development in Robotics and Artificial Intelligence",
  evergreen: true,
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/android-chrome-512x512.png",
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/manifest.json",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/favicon.ico",
        color: "#4607f2",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#4607f2",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/android-chrome-512x512.png",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#4607f2",
      },
    ],
    [
      "script",
      {
        src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
      },
    ],
  ],
  theme: "@vuepress/theme-blog",
  plugins: [
    "@vuepress/active-header-links",
    [
      "@vuepress/medium-zoom",
      {
        selector: ".content__default img",
      },
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
      "@vuepress/search",
      {
        searchMaxSuggestions: 12,
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "tip",
        defaultTitle: {
          "/": "TIP",
        },
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "warning",
        defaultTitle: {
          "/": "WARNING",
        },
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "danger",
        defaultTitle: {
          "/": "DANGER",
        },
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "details",
        before: (info) =>
          `<details class="custom-block details">${
            info ? `<summary>${info}</summary>` : ""
          }\n`,
        after: () => "</details>\n",
      },
    ],
  ],
  themeConfig: {
    smoothScroll: true,
    pwa: true,
    paginationComponent: "SimplePagination",
    feed: {
      canonical_base: "https://sharing.loratech.org",
    },
    comment: {
      service: "disqus",
      shortname: "mechafoss",
    },
    sitemap: {
      hostname: "https://sharingloratech.netlify.app",
    },
    globalPagination: {
      lengthPerPage: "20",
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
        text: "L.O.R.A © 2020. All rights reserved.",
        link: "",
      }, ],
    },
  },
};