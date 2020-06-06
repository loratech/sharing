module.exports = {
  plugins: [
    "@vuepress/last-updated",
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    "vuepress-plugin-smooth-scroll",
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    [
      "@vuepress/search",
      {
        searchHotkeys: ["s"],
      },
    ],
    [
      "@vuepress/medium-zoom",
      {
        selector: ".content__default :not(a) > img",
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
};