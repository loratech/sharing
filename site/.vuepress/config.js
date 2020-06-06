module.exports = {
    title: "L.O.R.A Sharing Hub",
    description: "An Organization of Students doing Research and Development in Robotics and Artificial Intelligence",
    evergreen: true,
    dest: 'public',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ['link', {
            rel: 'mask-icon',
            href: '/apple-touch-icon.png',
            color: '#f7df1e'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#f7df1e'
        }],
        ['meta', {
            name: 'viewport',
            content: "width=device-width, initial-scale=1.0"
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: '/android-chrome-192x192.png'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#f7df1e'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png'
        }],
        ['link', {
            rel: 'canonical',
            href: 'https://sharing.loratech.tech/'
        }]
    ],
    themeConfig: {
        searchPlaceholder: "Press 's' to search",
    },
};