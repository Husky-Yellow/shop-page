<template funcitonal>
    <main>
        index
        <button @click="open">111</button>
    </main>
</template>

<script>
export default {
    name: "Index",
    components: {
    },
    methods: {
        open(){
            this.$router.push({
    path: '/detail',
    query: {
        key: '前端'
    }
})
        }
    },
}
</script>
