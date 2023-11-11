<template funcitonal>
    <main class="index-box">
        <h2>商品列表</h2>
        <div class="container">
            <div v-for="(item, index) in list" :key="index" class="margin-t-20 fz-16">
                <figure @click="open(item.key)">
                    <img :src="item.img" loading="lazy" decoding="async"  />
                    <figcaption>
                        <p>
                            <span>{{ item.title }}</span>
                            <span>查看详情 ➡️ </span>
                        </p>
                    </figcaption>
                </figure>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            list: [
                {
                    img: 'https://1.rc.xiniu.com/rc/Banners/53330/images/ibpsp1_news_banner_1.jpg',
                    title: '三合一旅行三脚架（W28）',
                    key: '168'
                },
                {
                    img: 'https://1.rc.xiniu.com/rc/Banners/53330/images/ibpsp1_news_banner_1.jpg',
                    title: '云台',
                    key: '169'
                },
            ]
        }
    },
    methods: {
        open(key) {
            this.$router.push({
                path: '/detail',
                query: { key }
            })
        }
    },
}
</script>
<style scoped>
.index-box {
    background: #f4f4f4;
    min-height: 100vh;
}

.index-box>img {
    height: 120px;
    width: 100%;
}

.index-box>h2 {
    border-bottom: 1px solid #ccc;
    padding: 10px 8px;
}

.container {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 10px;
    padding: 10px 8px;
}

.container>div {
    background-color: #fff;
    height: 198px;
    overflow: hidden;
}

.container>div>figure {
    position: relative;
    overflow: hidden;
    z-index: 2;
}
.container>div>figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.container>div>figure>figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(8px, 36px);
    transition: all 0.2s ease-in-out;
    color: #ffffff;
    display: inline-flex;
    width: 80%;
    padding: 10px;
}

.container>div> figure:hover figcaption {
    transform: translate(12px, -12px);
    width: calc(100% - 24px);
}

.container>div> figure:hover img {
    transition: 1s;
    transform: scale(1.1);
}

.container p {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 100%;
    /* display: none; */
}

.container p>span:nth-child(2) {
    opacity: .7;
    font-size: 12px;
}

@media (max-width: 600px) {
    .container {
        grid-template-columns: 1fr;
    }
    .container>div {
        height: 208px;
    }

    .container>div>figure>figcaption {
        position: relative;
        transform: translate(0, 0);
        color: black;
        display: block;
        width: 100%;
    }
    .container p {
        margin-top: 0;
    }

    .container>div > figure:hover figcaption {
        transform: none;
    }

    .container>div> figure:hover img {
        transform: none;
    }
}</style>
