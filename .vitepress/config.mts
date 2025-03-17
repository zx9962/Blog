import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "张晓宇的文档",
  description: "文档",  //浏览器检索关键字
  // 头部小标
  head:[
    [
      "link",
      {
        rel:"icon",
        type:"image/svg+xml",
        href:"../assets/home-img.svg"
      }
    ]
  ],
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "../assets/home-img.svg",   // 标题前边图片
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/markdown-examples' }
    ],
    search:{  //搜索功能
      provider: "local"
    },
    sidebar: [
      {
        text: '文章',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'new-data', link: '/new-data' },
        ]
      },
      {
        text: '疑难杂症',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'new-data', link: '/new-data' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    footer:{
      message:"本站所有内容均为原创，转载请注明出处",
      copyright:"Copyright @ 2024"
    }
  }
})
