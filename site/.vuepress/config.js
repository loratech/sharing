module.exports = {
    title: "L.O.R.A Sharing Hub",
    description: "An Organization of Students doing Research and Development in Robotics and Artificial Intelligence",
    evergreen: true,
    base: '/sharing/',
    dest: 'public',
    head: [
        ['link', {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        }],
        ['link', {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com'
        }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
        }],
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