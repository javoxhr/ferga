<template>
    <div class="last-news-item">
        <div class="item-wrapper">
            <router-link :to="`/news/${lastNews.slug}`" class="item-title">{{ lastNews.title }}</router-link>
            <span class="date">{{ lastNews.date }}</span>
        </div>
    </div>
</template>

<script setup>
const {lastNews} = defineProps(['lastNews'])
</script>

<style lang="scss" scoped>
.date {
    font-weight: 400;
    font-size: 16px;
    margin-top: 10px;
    display: block;
}
.item-title {
    width: 100%;
    max-width: 300px;
    font-weight: 600;
    font-size: 20px;
    color:rgba(45, 44, 49, 1);

}
</style>