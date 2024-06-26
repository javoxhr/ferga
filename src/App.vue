<template>
  <loader />
  <div>
    <div
      class="serach-overlay"
      :style="{ display: serach == true ? 'block' : 'none' }"
      @click="serach = false"
    ></div>
    <div class="main-info">
      <div class="container">
        <button class="toggle" id="btn">
          {{ store.lang }}<img src="../assets/images/png/chevron-down.png" alt="" />
        </button>


        <div class="lang">
          <h3>{{ $i18n.t("hello") }}</h3>
          <div class="lang__wrapper">
            <button @click=" changeLang('uz'),  ($i18n.locale = 'uz')">Uzbekcha</button>
            <button @click=" changeLang('en'),  ($i18n.locale = 'en')">Englash</button>
            <button @click=" changeLang('ru'),  ($i18n.locale = 'ru')">Русский</button>
          </div>
        </div>
        <h2><a href="#">«Фарғоналикларни» </a>телеграмда кузатинг!</h2>

        <button class="search" style="cursor: pointer">
          <img src="../search.png" alt="" @click="serach = true" />
        </button>
        <div class="open-search" :class="{ 'serach-after': serach == true }">
          <input type="search" placeholder="Qidiruv..." />
        </div>
      </div>
    </div>

    <header>
      <div class="overlay" :style="{'display': controlMenu == 0 ? 'block' : 'none'}"></div>
      <div class="container">
        <div class="header-wrapper">
          <div class="burger-menu">
            <button @click="controlMenu = 0">
              <img src="@/assets/images/png/burger.png" alt="" />
            </button>

            <div class="open-menu" :style="{'left': controlMenu + '%'}">
              <div class="open-menu__wrapper">
                <div class="open-menu__header">
                  <div class="open-menu__header__wrapper">
                    <router-link to="/">
                    <img src="@/assets/images/svg/menu-logo.svg" alt="">
                  </router-link>
                  <button class="menu-lang" style="background: rgba(223, 173, 42, 1);">Узбекча <img src="../src/assets/images/png/menu-icon-st.png" alt=""></button>
                  </div>
                  <button class="menu-close-btn" @click="controlMenu = -100" ><img src="../src/assets/images/svg/menu-close-btn.svg" alt=""> </button>
                </div>

                <div class="open-menu-nav-list">
                  <li><router-link to="/" class="menu-title">home</router-link></li>
                  <li><router-link to="/" class="menu-title">Ўзбекистон</router-link></li>
                  <li><router-link to="/" class="menu-title">Технология</router-link></li>
                  <li><router-link to="/" class="menu-title">Жахон</router-link></li>
                  <li><router-link to="/" class="menu-title">Фарғона</router-link></li>
                  <li v-for="item in categorys?.data" :key="item"><router-link :to="`/category/${item.slug}/${item.id}`" class="menu-title">{{ item.title }}</router-link></li>
                </div>
              </div>
            </div>
          </div>
          <div class="header-logo-wrap">
            <a href="./index.html"><img src="../header-logo.svg" alt="" /></a>
          </div>

          <div class="search-media">
            <button @click="serach = true">
              <img src="@/assets/images/png/search2.png" alt="" />
            </button>
          </div>
          <nav>
            <ul>
              <li><router-link to="/">home</router-link></li>
              <li v-for="link in categorys?.data" :key="link">
                <router-link :to="`/category/${link.slug}/${link.id}`">{{
                  link.title
                }}</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <router-view />

    <footer>
      <div class="container">
        <div class="footer-wrapper">
          <div class="footer-logo-wrap">
            <a href="./index.html"
              ><img src="../assets/images/svg/footer-logo.svg" alt=""
            /></a>
          </div>

          <div class="footer-nav-wrap">
            <nav>
              <ul>
                <li><a href="#">Ўзбекистон</a></li>
                <li><a href="#">Технология</a></li>
                <li><a href="#">Жахон</a></li>
                <li><a href="#">Фарғона</a></li>
                <li><a href="#">Жамият</a></li>
                <li><a href="#">Сиёсат</a></li>
                <li><a href="#">Муҳокама</a></li>
                <li><a href="#">Спорт</a></li>
              </ul>
            </nav>

            <div class="footer-icons-wrap icons-wrap-2">
              <div class="footer-icon">
                <a href="#"
                  ><img src="../assets/images/png/Telegram.png" alt=""
                /></a>
              </div>

              <div class="footer-icon">
                <a href="#"
                  ><img src="../assets/images/png/instagram.png" alt=""
                /></a>
              </div>

              <div class="footer-icon">
                <a href="#"
                  ><img src="../assets/images/png/Face.png" alt=""
                /></a>
              </div>

              <div class="footer-icon">
                <a href="#"
                  ><img src="../assets/images/png/youtube.png" alt=""
                /></a>
              </div>
            </div>

            <span class="footer-linie"></span>
            <h3 class="figma-time">
              2021 © Фарғоналиклар Барча ҳуқуқлар ҳимоя қилинган
            </h3>
          </div>

          <div class="footer-icons-wrap">
            <div class="footer-icon">
              <a href="#"
                ><img src="../assets/images/png/Telegram.png" alt=""
              /></a>
            </div>

            <div class="footer-icon">
              <a href="#"
                ><img src="../assets/images/png/instagram.png" alt=""
              /></a>
            </div>

            <div class="footer-icon">
              <a href="#"><img src="../assets/images/png/Face.png" alt="" /></a>
            </div>

            <div class="footer-icon">
              <a href="#"
                ><img src="../assets/images/png/youtube.png" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<script setup>
import loader from "@/components/Loader.vue";
import { useStore } from "./store/store";
import sevices from "./services/sevices";
import { ref } from "vue";

const store = useStore()

const categorys = ref({});

const serach = ref(false);

const controlMenu = ref(-100)

function changeLang(l) {
  store.lang = l
  localStorage.setItem("lang", l)
}

async function getCateycorys() {
  const res = await sevices.getCatigorys();
  categorys.value = res.data;
  console.log(res.data)
}
getCateycorys();
</script>

<style lang="scss" scoped>
.menu-lang {
  padding: 6px 15px;
  border-radius: 14px;
  color: #fff;
  cursor: pointer;
  transition: all .2s ease;
}
.lang {
  padding: 10px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  border-radius: 5px;
  background: #fff;
  position: absolute;
  top: 40px;
  left: 50px;
  h3 {
    font-weight: 400;
    font-size: 16px;
  }
  &__wrapper {
    display: flex;
    align-items: center;
    gap: 5px;
    button {
      padding: 5px 10px;
      border: 1px solid;
      border-radius: 10px;
      &:hover {
        border: 1px solid #DFAD2A;;
        background: #DFAD2A;
        color: #fff;
      }
      &:active {
        opacity: 0.8;
      }
    }
  }
}
</style>