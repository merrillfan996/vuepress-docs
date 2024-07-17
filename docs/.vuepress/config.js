import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'
import {navbar} from "./narbar/index.js";
import {sidebar} from "./sidebar/index.js";

export default defineUserConfig({
    title: '星空文档',
    base: "/",
    description: 'merrill-fan', // meta 中的描述文字，用于SEO
    head: [['link', {rel: 'icon', href: '/star.png'}],],
    theme: defaultTheme({
        logo: "star.png",
        navbar: navbar,
        sidebar: sidebar
    }),
    bundler: viteBundler({
        viteOptions: {
            server: {
                port: 3000 // 指定启动端口为3000
            }
        },
        vuePluginOptions: {},
    }),
})
