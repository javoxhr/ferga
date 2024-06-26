<template>
  <div class="detail">

    <div class="container">
    <div class="detail-wrapper">
      <div class="detail-left">
        <div class="container">
          <h2>{{ detail?.data?.news_detail?.title }}</h2>
          <div
            class="detail-information"
            style="width: 700px"
            v-html="detail?.data?.news_detail?.content"
          ></div>
        </div>
      </div>

      <div class="detail-right">
        <div class="container">
          <div class="detail-right-wrapper">
            <NewsDetail
              v-for="item in detail?.data?.last_news"
              :key="item"
              :lastNews="item"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import services from "@/services/sevices";
import { ref, watch} from "vue";
import { useStore } from "@/store/store";
import { useRoute } from "vue-router";
import NewsDetail from "../components/LastNewsItem.vue";
const route = useRoute();
const detail = ref({});
const store = useStore();
const getDetail = async () => {
  store.loader = true;
  const res = await services.getDetail(route.params.slug);
  detail.value = res.data;
  store.loader = false;
};

watch(()=> {
    getDetail();
})
</script>

<style lang="scss" scoped>
.detail-information {
  * {
    font-family: sans-serif !important;
    font-weight: 400 !important;
    font-size: 18px !important;
  }
}

.container {
    width: 100%;
    max-width: 1380px;
    margin: 0 auto;
    padding: 0 20px;
}
.detail {
  margin-top: 20px;
  h2 {
    width: 100%;
    font-weight: 400;
    font-size: 30px;
    padding-bottom: 10px;
  }
}
.detail-right-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.detail-wrapper {
  display: flex;
  gap: 100px;
}

</style>