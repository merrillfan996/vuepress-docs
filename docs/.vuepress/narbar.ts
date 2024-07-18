import type {NavItem} from 'vuepress-theme-plume'

export const navbar = [
    {
        text: '主页',
        link: '/',
    },
    {
        text: 'vue',
        link: '/notes/vue/基础/MVVM模式.md',
        activeMatch: '^/vue/',
    },
    {
        text: '关于我',
        link: '/notes/about.md',
        activeMatch: '^/about/',
    },
] as NavItem[]
