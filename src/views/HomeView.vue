<template>
  <div>
    <div class="rek-time">
      <div class="container">
        <a href="#"><img src="../assets/images/jpg/rek1.jpg" alt="" /></a>
      </div>
    </div>

    <div class="prisdent">
      <div class="container">
        <div
          class="prisdent-wrapper"
          v-for="banner in bannerNews?.data"
          :key="banner"
        >
          <div class="prisdent-text-wrapper">
            <div class="prisdent-title">
              <h1>
                {{ banner.title }}
              </h1>
              <span class="linia"></span>
              <p class="banner-desc">
                Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. A libero eius eveniet 
                ut sapiente dolorum quaerat quas, at doloribus
                impedit voluptate nesciunt consequuntur maxime
                animi amet illo dicta obcaecati quod.
              </p>
              <span class="linia"></span>
              <p class="banner-desc">
                Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Ex minima error incidunt 
                illo recusandae voluptates obcaecati dolorem,
                tempore odit quibusdam provident pariatur omnis
                cumque sit quisquam aut neque officia harum?
              </p>
            </div>
          </div>

          <div class="prisdent-img-wrap">
            <img :src="store.baseURL + banner.image" :alt="banner.title" />
          </div>
        </div>
      </div>
    </div>

    <div class="Uzbekistan">
      <div class="container">
        <div class="Uzbekistan-text-wrap">
          <h1>So'ngi yangiliklar</h1>
          <router-link to="/">Барчаси</router-link>
        </div>
        <span class="uz-lin"></span>

        <div class="Uzbekistan-cards-wrapper">
          <NewCard
            v-for="lastNew in LatestNews?.data?.last_news"
            :key="lastNew"
            :news="lastNew"
          ></NewCard>
        </div>
      </div>
    </div>

    <div class="car-news">
      <div class="container">
        <div class="Uzbekistan-text-wrap">
          <h1>Жахон</h1>
          <a href="#">Барчаси</a>
        </div>
        <span class="uz-lin"></span>

        <div class="car-news-wrapper">
          <div class="car-news-img-wrap">
            <img
              class="big-car"
              src="../assets/images/jpg/big-car.jpg"
              alt=""
            />
            <h1 class="car-title">
              Дунёдаги энг чиройли гиперкар маълум қилинди
            </h1>
            <div class="time-info car-time">
              <div class="time-wrap">
                <img src="../assets/images/png/clock.png" alt="" />
                <h2>11:00 / 13.10.2021</h2>
              </div>
              <div class="time-wrap">
                <img src="../assets/images/png/ease.png" alt="" />
                <h2>14550</h2>
              </div>
            </div>
          </div>

          <div class="car-items-wrapper">
            <div class="car-item">
              <a href="#"
                ><h1>
                  Бразилия президенти коронавирусга қарши эмланишдан воз кечди
                </h1></a
              >
              <div class="time-info car-time">
                <div class="time-wrap">
                  <img src="../assets/images/png/clock.png" alt="" />
                  <h2>11:00 / 13.10.2021</h2>
                </div>
                <div class="time-wrap">
                  <img src="../assets/images/png/ease.png" alt="" />
                  <h2>14550</h2>
                </div>
              </div>
            </div>
            <span class="uz-lin uz-lin-car"></span>

            <div class="car-item">
              <a href="#"
                ><h1>
                  Бразилия президенти коронавирусга қарши эмланишдан воз кечди
                </h1></a
              >
              <div class="time-info car-time">
                <div class="time-wrap">
                  <img src="../assets/images/png/clock.png" alt="" />
                  <h2>11:00 / 13.10.2021</h2>
                </div>
                <div class="time-wrap">
                  <img src="../assets/images/png/ease.png" alt="" />
                  <h2>14550</h2>
                </div>
              </div>
            </div>
            <span class="uz-lin uz-lin-car"></span>

            <div class="car-item">
              <a href="#"
                ><h1>
                  Шавкат Мирзиёев МДҲ раҳбарлари кенгашининг юбилей мажлисида
                  иштирок этди
                </h1></a
              >
              <div class="time-info car-time">
                <div class="time-wrap">
                  <img src="../assets/images/png/clock.png" alt="" />
                  <h2>11:00 / 13.10.2021</h2>
                </div>
                <div class="time-wrap">
                  <img src="../assets/images/png/ease.png" alt="" />
                  <h2>14550</h2>
                </div>
              </div>
            </div>
            <span class="uz-lin uz-lin-car"></span>

            <div class="car-item">
              <a href="#"
                ><h1>
                  15 октябрь — Халқаро қишлоқ аёллари куни. Бу кун ҳақида бизга
                </h1></a
              >
              <div class="time-info car-time">
                <div class="time-wrap">
                  <img src="../assets/images/png/clock.png" alt="" />
                  <h2>11:00 / 13.10.2021</h2>
                </div>
                <div class="time-wrap">
                  <img src="../assets/images/png/ease.png" alt="" />
                  <h2>14550</h2>
                </div>
              </div>
            </div>
            <span class="uz-lin uz-lin-car"></span>

            <div class="car-item">
              <a href="#"
                ><h1>
                  Бразилия президенти коронавирусга қарши эмланишдан воз кечди
                </h1></a
              >
              <div class="time-info car-time">
                <div class="time-wrap">
                  <img src="../assets/images/png/clock.png" alt="" />
                  <h2>11:00 / 13.10.2021</h2>
                </div>
                <div class="time-wrap">
                  <img src="../assets/images/png/ease.png" alt="" />
                  <h2>14550</h2>
                </div>
              </div>
            </div>
            <span class="uz-lin uz-lin-car"></span>
          </div>
        </div>
      </div>
    </div>

    <div class="vidio">
      <div class="container">
        <div class="vidio-wrapper">
          <div class="vidio-cover">
            <div class="cover-wrap">
              <img
                class="vidio-cover"
                src="../assets/images/jpg/vidio-caver.jpg"
                alt=""
              />
              <div class="control-wrap">
                <button>
                  <img
                    class="control-position-1"
                    src="../assets/images/png/control-round.png"
                    alt=""
                  />
                  <img
                    class="control-position-2"
                    src="../assets/images/png/control-click.png"
                    alt=""
                  />
                </button>
              </div>
            </div>

            <h1 class="vidio-cover-title">
              Ердаги «Марс», Европадаги қор, Россияда йўлда ерга кириб кетган
              машиналар. Кун суратлари
            </h1>

            <div class="time-info car-time">
              <div class="time-wrap">
                <img src="../assets/images/png/clock.png" alt="" />
                <h2>11:00 / 13.10.2021</h2>
              </div>
              <div class="time-wrap">
                <img src="../assets/images/png/ease.png" alt="" />
                <h2>14550</h2>
              </div>
            </div>
          </div>

          <div class="vidio-cover">
            <div class="cover-wrap">
              <img
                class="vidio-cover"
                src="../assets/images/jpg/vidio-caver-2.jpg"
                alt=""
              />
              <div class="control-wrap">
                <button>
                  <img
                    class="control-position-1"
                    src="../assets/images/png/control-round.png"
                    alt=""
                  />
                  <img
                    class="control-position-2"
                    src="../assets/images/png/control-click.png"
                    alt=""
                  />
                </button>
              </div>
            </div>

            <h1 class="vidio-cover-title">
              Ердаги «Марс», Европадаги қор, Россияда йўлда ерга кириб кетган
              машиналар. Кун суратлари
            </h1>

            <div class="time-info car-time">
              <div class="time-wrap">
                <img src="../assets/images/png/clock.png" alt="" />
                <h2>11:00 / 13.10.2021</h2>
              </div>
              <div class="time-wrap">
                <img src="../assets/images/png/ease.png" alt="" />
                <h2>14550</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/store/store";
import Services from "../services/sevices";
import NewCard from "../components/NewsCard.vue";
import { onMounted, ref, watch } from "vue";

const store = useStore();
const bannerNews = ref({});
const LatestNews = ref({});

const show = ref(true);

async function getBannerNews() {
  store.loader = true;
  const res = await Services.getBannerNews(store.lang);
  bannerNews.value = res.data;
  console.log(res.data)
  store.loader = false;
}

async function getLatestNews() {
  store.loader = true;
  const res = await Services.getLatestNews(store.lang);
  LatestNews.value = res.data;
  store.loader = false;
}
getBannerNews();
getLatestNews();

watch(()=> store.lang, (newVal, oldVal)=> {
  getBannerNews()
  getLatestNews();
})
</script>

<style lang="scss" scoped>
.linia {
  display: block;
  width: 100%;
  height: 1.5px;
  background: #b4b3b3;
  margin-top: 30px;
}
.prisdent-title {
  h1 {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: #000;
  }
}
.banner-desc {
  font-weight: 400;
  font-size: 18px;
  margin-top: 20px;
  line-height: 1.5;
  &:last-child {
    font-size: 17px;
  }
}
@media screen and (max-width: 1104px) {
    .prisdent-title {
        display: none;
    }
}
.prisdent-img-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
}
.prisdent-text-wrapper {
  position: relative;
}

.rek-time {
    a {
        img {
            width: 100%;
        }
    }
}
</style>