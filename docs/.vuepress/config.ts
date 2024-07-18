import {plumeTheme} from 'vuepress-theme-plume'
import {defineUserConfig} from 'vuepress'
import {viteBundler} from '@vuepress/bundler-vite'

import {navbar} from "./narbar.js";
import {notes} from "./notes.js";

export default defineUserConfig({
    title: '星空文档',
    base: "/",
    lang: 'zh-CN',
    description: 'merrill-fan', // meta 中的描述文字，用于SEO
    head: [['link', {rel: 'icon', href: '/star.png'}],],
    theme: plumeTheme({
        logo: "star.png",
        navbar: navbar,
        notes: notes,
        navbarSocialInclude: ['github'],
        footer: {copyright: 'Copyright © 2024-present mei-fan'}
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
