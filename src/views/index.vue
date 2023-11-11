<template funcitonal>
    <main class="index-box">
        <h2>商品</h2>
        <div class="container">
            <div v-for="(item, index) in list" :key="index"  class="margin-t-20 fz-16">
                <figure @click="open(item.key)">
                    <img
                        :src="item.img"
                        loading="lazy"
                        decoding="async"
                        class="width-auto"
                        />
                    <figcaption>
                        <p>
                            <span>{{ item.title }}</span>
                            <span>查看详情 > </span>
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
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 10px 8px;
}
.container >div{
    overflow: hidden;
}
.container > div > figure {
    position: relative;
    overflow: hidden;
    z-index: 2;
}
.container > div > figure > figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(12px, 60px);
    transition: all 0.2s ease-in-out;
    color: #ffffff;
    display: flex;
}
.container >div:hover figcaption {
    transform: translate(12px, -12px);
}
.container >div:hover img {
    transition: 1s;
    transform: scale(1.1);
}
.container p{
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    /* display: none; */
}
.container p> span:nth-child(2) {
    opacity: .7;
    font-size: 14px;
    margin-left: auto;
}

@media (max-width: 600px) {
  .container {
    grid-template-columns: 1fr;
  }
  .container > div > figure > figcaption {
    position: relative;
    transform: translate(0, 0);
    color: black;
    display: block;
  }
  .container >div:hover figcaption {
    transform: none;
    }
.container >div:hover img {
    transform: none;
}
}
</style>
