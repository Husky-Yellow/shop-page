<template funcitonal>
    <main>
        <img class="width-auto" :src="showValue.img">
        <h2 class="h2">{{ showValue.title }}</h2>
        <ul>
            <li v-for="(item, index) in showValue.video" :key="index">
                <h3 class="h3">{{ item.subTitle }}</h3>
                <ul>
                    <li v-for="(intro, index) in item.intro" :key="index">
                        <h4 class="h4">{{ intro.title }}</h4>
                        <video preload="auto" :poster="intro.poster" controls="controls" :src="intro.video" height="auto"></video>
                    </li>
                </ul>
            </li>
        </ul>
    </main>
</template>

<script>
export default {
    name: "Detail",
    data() {
        return {
            key: '',
            datail: {
                '168': {
                    title: '3-in-1 トラベル三脚',
                    img: 'https://fp.yangcong345.com/shadow/shop--2-6914d8020dfd1945d4317a8469b19270.jpeg',
                    video: [
                        {
                            subTitle: '01 脚の伸縮方法',
                            intro: [
                                {
                                    title: '',
                                    video: 'https://vs-video.yangcong345.com/shadow/W28-1-9d74688e8098b887be0028e277a21b9f.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/1-c6d7e6aae074db6c326bfbd383de5321.png'
                                }
                            ]
                        },
                        {
                            subTitle: '02 脚の角度を調整する',
                            intro: [
                                {
                                    title: '2.1 メイン三脚の調整',
                                    video: 'https://vs-video.yangcong345.com/shadow/2.1-shop-title-268d2b1d6affbe01df1a30801290143e.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/2.1-65baf527ee1e7c087e9597e75e6e18d9.png'
                                },
                                {
                                    title: '2.2 サブ三脚の調整',
                                    video: 'https://vs-video.yangcong345.com/shadow/2.2-shop-title-ca7b8f368fcc0d6ab994e625f078f9ed.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/2.2-b17c534ce3c7e51310b816e48d4d990c.png'
                                }
                            ]
                        },
                        {
                            subTitle: '03 カメラ台をカメラに取り付ける',
                            intro: [
                                {
                                    title: '',
                                    video: 'https://vs-video.yangcong345.com/shadow/03-shop-title-c3b82c8fccfe8124c9a422e5a3d6b069.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/3-1d2bccf93442f224f3958d5bc2cbd851.png'
                                },
                            ]
                        },
                        {
                            subTitle: '04 カメラを雲台に取り付ける',
                            intro: [
                                {
                                    title: '',
                                    video: 'https://vs-video.yangcong345.com/shadow/04-shop-title-b7b34cffbb59bba085bfbf3b43773bf6.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/4-09a1890fdd5814c682608cb1756739ae.png'
                                },
                            ]
                        },
                        {
                            subTitle: '05 雲台を使用する',
                            intro: [
                                {
                                    title: '5.1 ボールヘッドロックレバー',
                                    video: 'https://vs-video.yangcong345.com/shadow/5.1-shop-title-ee3d6ee96ba878beb42a38d3100b8798.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/5.1-899fd6045e6d9c318129c33eeab337bc.png'
                                },
                                {
                                    title: '5.2 パノラマベースロックノブ',
                                    video: 'https://vs-video.yangcong345.com/shadow/5.2-shop-title-5ad906d86be0276ddd327553b4eac4b5.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/5.2-a9a2bad920119fc171ae993311ea532d.png'
                                },
                                {
                                    title: '5.3 パノラマベースの2つのモードを切り替える方法',
                                    video: 'https://vs-video.yangcong345.com/shadow/5.3-shop-title-b57f231f28a4c7f13ba8d49fd89af3f0.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/5.3-276949e20e466a6e39f235fd829890a0.png'
                                },
                            ]
                        },
                        {
                            subTitle: '06 ビリヤードロックレンチの調整です',
                            intro: [
                                {
                                    title: '6.1 ボールヘッドをロックできない場合',
                                    video: 'https://vs-video.yangcong345.com/shadow/6.1-shop-title-3f0fbbaccb55d23d2ea13293df692c5d.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/6.1-b6a4e4912969b85ba331582cc0c5e23e.png'
                                },
                                {
                                    title: '6.2 ボール雲台のロックレバーの着脱',
                                    video: 'https://vs-video.yangcong345.com/shadow/W28-6.2-11f2ee44978ab317ac5ea3c774512ffe.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/6.2-27f80e65f37b9062273094d2fb9ee57a.png'
                                },
                            ]
                        },
                        {
                            subTitle: '07 センターコラムを引き出す',
                            intro: [
                                {
                                    title: '',
                                    video: 'https://vs-video.yangcong345.com/shadow/7-shop-title-e2f0ce1edf6922decccb3935744666d2.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/7-b4687aca0db12892b057708d68610b8a.png'
                                },
                            ]
                        },
                        {
                            subTitle: '08 センターコラムを取り外す',
                            intro: [
                                {
                                    title: '',
                                    video: 'https://vs-video.yangcong345.com/shadow/8-shop-title-622632b5dc0aedb6b90821e9c38ef237.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/8-1945886fa94b23ec63f8dcc4bf199cf9.png'
                                },
                            ]
                        },
                        {
                            subTitle: '09 雲台をメイン三脚に設置する',
                            intro: [
                                {
                                    title: '',
                                    video: 'https://vs-video.yangcong345.com/shadow/10-shop-title-2b11b38933e197bca80ae491588c8718.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/10-3b4350c1623db03a9224fae9a24d9d29.png'
                                },
                            ]
                        },
                        {
                            subTitle: '10 スパイクを取り付ける',
                            intro: [
                                {
                                    title: '',
                                    video: 'https://vs-video.yangcong345.com/shadow/11-shop-title-e569d25dc711773e11bf717eafb5868d.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/11-d095c1efaeccc1e906e6cc0d194979ed.png'
                                },
                            ]
                        },
                        {
                            subTitle: '11 スマホマウントを使用する',
                            intro: [
                                {
                                    title: '',
                                    video: 'https://vs-video.yangcong345.com/shadow/12-shop-title-df97398505b2822842d4ab2f78d6034d.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/12-faba388ebd0f61dc3200c8ac5467bf65.png'
                                },
                            ]
                        },
                        {
                            subTitle: '12 アクセサリーを取り付ける',
                            intro: [
                                {
                                    title: '',
                                    video: 'https://vs-video.yangcong345.com/shadow/13-shop-title-2b9bd0ccf0795d82dd1bc518ad88e99c.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/13-930e65d3fb7986393f62e675fdb64fca.png'
                                },
                            ]
                        },
                        {
                            subTitle: '13 雲台と三脚の固定を強化する',
                            intro: [
                                {
                                    title: '',
                                    video: 'https://vs-video.yangcong345.com/shadow/14-shop-title-04207c2a047921deffdc789c15cdfa9d.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/14-7f6fc0163fd663ce41d09be7ad78e793.png'
                                },
                            ]
                        },
                        {
                            subTitle: '14 メイン三脚の開閉を調整する',
                            intro: [
                                {
                                    title: '',
                                    video: 'https://vs-video.yangcong345.com/shadow/W28-15-6a55b08843cf0e8a862758f2a7bf505f.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/15-ac2135eff8ed090a48dc15718060367b.png'
                                },
                            ]
                        },
                        {
                            subTitle: '15 ロックのねじ山をすばやく合わせる',
                            intro: [
                                {
                                    title: '',
                                    video: 'https://vs-video.yangcong345.com/shadow/W28-16-9e072a74ee00aac3bef6b169c0cbec2a.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/16-d899c4979041929367c74212bec25512.png'
                                },
                            ]
                        },
                        {
                            subTitle: '16 収納バッグの内バッグの使い方',
                            intro: [
                                {
                                    title: '',
                                    video: 'https://vs-video.yangcong345.com/shadow/W28-17-f02ba0b6c264b7c40cff9d604424da1b.mp4',
                                    poster: 'https://fp.yangcong345.com/shadow/17-d9e45d295ac87c99e65317f594615d14.png'
                                },
                            ]
                        },
                    ]
                },
                '169': {
                    title: 'KF50 ボールヘッド',
                    img: 'https://fp.yangcong345.com/shadow/shop--1-0f284f46d5f5d339039563dd553f98e2.jpeg',
                    video: [
                        {
                            subTitle: '01 カメラを雲台に取り付ける',
                            intro: [
                                {
                                    title: '1.1 KF50-Q専用',
                                    video: 'https://vs-video.yangcong345.com/shadow/1.2-KF50-b7b34cffbb59bba085bfbf3b43773bf6.mp4',
                                    poster: 'https://fp.yangcong345.com/middle/1.0.0/169-kf50/169-kf50---1.png'
                                },
                                {
                                    title: '1.2 KF50-S専用',
                                    video: 'https://vs-video.yangcong345.com/shadow/01-KF50-08be313bca310fe247293bf569d5053e.mp4',
                                    poster: 'https://fp.yangcong345.com/middle/1.0.0/169-kf50/169-kf50---1.2.png'
                                }
                            ]
                        },
                        {
                            subTitle: '02 ボールヘッドロックレバー',
                            intro: [
                                {
                                    title: '',
                                    video: 'https://vs-video.yangcong345.com/shadow/2-KF50-ee3d6ee96ba878beb42a38d3100b8798.mp4',
                                    poster: 'https://fp.yangcong345.com/middle/1.0.0/169-kf50/169-kf50---2.png'
                                },
                            ]
                        },
                        {
                            subTitle: '03 パノラマベースロックノブ',
                            intro: [
                                {
                                    title: '',
                                    video: 'https://vs-video.yangcong345.com/shadow/3-KF50-5ad906d86be0276ddd327553b4eac4b5.mp4',
                                    poster: 'https://fp.yangcong345.com/middle/1.0.0/169-kf50/169-kf50---3.png'
                                },
                            ]
                        },
                        {
                            subTitle: '04  スムーズパンモードへの切り替え',
                            intro: [
                                {
                                    title: '',
                                    video: 'https://vs-video.yangcong345.com/shadow/4-KF50-b57f231f28a4c7f13ba8d49fd89af3f0.mp4',
                                    poster: 'https://fp.yangcong345.com/middle/1.0.0/169-kf50/169-kf50---4.png'
                                },
                            ]
                        },
                        {
                            subTitle: '05 ボールヘッドをロックできない場合',
                            intro: [
                                {
                                    title: '',
                                    video: 'https://vs-video.yangcong345.com/shadow/5-KF50-3f0fbbaccb55d23d2ea13293df692c5d.mp4',
                                    poster: 'https://fp.yangcong345.com/middle/1.0.0/169-kf50/169-kf50---5.png'
                                },
                            ]
                        },
                        {
                            subTitle: '06 ボール雲台のロックレバーの着脱',
                            intro: [
                                {
                                    title: '',
                                    video: 'https://vs-video.yangcong345.com/shadow/6-11f2ee44978ab317ac5ea3c774512ffe.mp4',
                                    poster: 'https://fp.yangcong345.com/middle/1.0.0/169-kf50/169-kf50---6.png'
                                },
                            ]
                        },
                        {
                            subTitle: '07 スマホマウントを使用する',
                            intro: [
                                {
                                    title: '',
                                    video: 'https://vs-video.yangcong345.com/shadow/7-KF50-df97398505b2822842d4ab2f78d6034d.mp4',
                                    poster: 'https://fp.yangcong345.com/middle/1.0.0/169-kf50/169-kf50---7.png'
                                },
                            ]
                        },
                    ]
                },
            },
        }
    },
    computed: {
        showValue() {
            return this.datail[this.key] || {
                title: '未找到该商品'
            }
        }
    },
    mounted() {
        const { key } = this.$route.query
        this.key = key
    }
}
</script>

<style scoped>
.width-auto {
    max-width: 100%;
    height: 40vh;
    object-fit: cover;
}

main video {
    max-width: 658px;
}

main h2 {
    text-align: center;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
}

main h3 {
    border-left: 4px solid #ccc;
    padding-left: 10px;
    margin-top: 40px;
}

main h4 {
    padding: 14px 0 4px;
}

main>ul {
    padding: 20px 0;
    margin: 0 auto;
    width: 800px;
}

main>ul>li>ul {
    margin: 12px 0;
}

@media screen and (max-width:959px) {
    main video {
        max-width: 100%;
    }
    main>ul {
        min-width: none;
        width: auto;
        padding: 0 10px;
    }
    main>ul>li>ul > li {
        padding: 0 20px;
    }
}</style>
