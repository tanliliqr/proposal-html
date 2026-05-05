// ==========================================
// 全局配置文件 config.js
// 你可以在这里任意修改你的文案、图片、视频和音乐
// ==========================================

const GLOBAL_CONFIG = {
    // 恋爱开始时间 (年, 月-1, 日, 时, 分, 秒)
    loveStart: new Date(2017, 8, 11, 13, 14, 0),

    // 背景音乐（可配置多首，自动轮播）
    music: {
        normal: ['./music/bgm1.mp3', './music/bgm2.mp3', './music/bgm3.mp3'],
        climax: './music/zhejiushiai.mp3'
    },

    // 💌 恋爱时间轴（按时间顺序，可无限添加）
    timeline: [
        {
            date: '2017年7月25日',
            text: '在那个阳光正好的午后，我第一次遇见你。你的笑容像初夏的微风，轻轻吹进了我心里。',
            img: './images/first/第一张关于你的照片.jpg'
        },
    ],
    
    // 📖 照片故事（按顺序播放，每段配多张照片轮播）
    stories: [
        {
            text: "2017 我们相识的第一年 在人群与文字之间，第一次靠近彼此。",
            images: ['./images/2017/第一次旅行.jpg'],
            duration: 7000
        },
    ],

    gallery: [
        {
            'src': './images/2018/下雪啦我说要拍一个雪花落下的-共白头啦.jpg',
            'caption': ''
        }
    ],

    // 🎬 亲友祝福视频（支持多个，带封面和标题）
    videos: [
        {
            src: './video/1.mp4',
            poster: './video/1.jpg',
            title: '我最积极的大兄弟'
        }
    ],

    // 💍 爱的誓言（求婚前的深情告白）
    vow: {
        text: ``,
        signature: '—— 永远爱你的我'
    },

    // 💎 钻戒图片路径（透明底PNG最佳）
    ringImage: './images/ring.png',
    roseImage: './images/rose.png',
    sakuraImage: './images/sakura.png'
};

