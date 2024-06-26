<template>
  <div class="Uzbekistan-card">
    <img
      class="prisdent-card-img"
      width="100%"
      height="160px"
      :src="store.baseURL + news?.image"
      :alt="news?.title"
    />
    <div class="Uzbekistan-card__text-wrapper">
      <router-link to="/"><h3 class="Uz-card-info">Ўзбекистон</h3></router-link>
      <router-link
        style="display: inline-block"
        class="Uz-desc"
        :to="`/news/${news.slug}`"
      >
        {{ news?.title }}
      </router-link>
      <div class="time-info">
        <div class="time-wrap">
          <img src="../assets/images/png/clock.png" alt="" />
          <h2>{{ news.date }}</h2>
        </div>
        <div class="time-wrap">
          <img src="../assets/images/png/ease.png" alt="" />
          <h2>{{ news.count_view }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/store/store";
const store = useStore();
const { news } = defineProps(["news"]);
</script>

<style>
</style>