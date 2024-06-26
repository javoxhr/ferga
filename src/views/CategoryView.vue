<template>
  <div class="uz-cards">
    <div class="container">
      <h1 class="uz-cards-title">{{ detail?.data?.category }}</h1>
      <span class="uz-cards-linie"></span>

      <div class="uzbekistan-cards-wrapper">
        <NewsCard
          v-for="item in detail?.data?.news_list"
          :key="item"
          :news="item"
        />
      </div>

      <div class="uz-cards-btn">
        <button @click="addPageCategory()">Яна янгиликлар</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import NewsCard from "@/components/NewsCard.vue";
import services from "@/services/sevices";
import { useRoute } from "vue-router";
import { ref, watch, watchEffect } from "vue";
import { useStore } from "@/store/store";
const route = useRoute();
const store = useStore();
const detail = ref({});

const news = ref([]);

const page = ref(1);

async function addPageCategory() {
  page.value += 1;
  const res = await services.getDetailCategory(
    route.params.id,
    route.params.slug,
    page.value, 
    store.lang
  );
  news.value.push(...res.data?.data?.news_list);
}

async function getDetailCatigory() {
  store.loader = true;
  const res = await services.getDetailCategory(
    route.params.id,
    route.params.slug,
    page.value
  );
  detail.value = res.data;
  news.value = res.data?.data?.news_list;
  store.loader = false;
}
getDetailCatigory();

watch(
  () => route.path,
  (newVal, oldVal) => {
    getDetailCatigory();
  }
);
watch(()=> store.lang, (newVal, oldVal)=> {
  getDetailCatigory();
})
</script>

<style lang="scss">
.uzbekistan-cards-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}
</style>