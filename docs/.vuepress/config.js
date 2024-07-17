import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'
import  vuepressPluginAnchorRight from "vuepress-plugin-anchor-right"
import {navbar} from "./narbar/index.js";
import {sidebar} from "./sidebar/index.js";

export default defineUserConfig({
    title: '星空文档', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: 'merrill-fan', // meta 中的描述文字，用于SEO
    head: [
        ['link', {rel: 'icon', href: '/star.png'}],
    ],
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
