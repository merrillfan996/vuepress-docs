import {definePlumeNotesConfig} from 'vuepress-theme-plume'

export const notes = definePlumeNotesConfig({
    dir: '/notes/',
    link: '/',
    notes: [
        {
            dir: 'vue/基础',
            link: '/vue/',
            sidebar:[
                {
                    text: '基础',
                    items: ['MVVM模式','生命周期','计算属性vs方法vs侦听属性'],
                },
            ]
        }
    ]
})
