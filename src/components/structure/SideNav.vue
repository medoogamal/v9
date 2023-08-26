<script setup>
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";
import CloseBox from "vue-material-design-icons/CloseBox.vue";
import Search from "vue-material-design-icons/Magnify.vue";
import Shopping from "vue-material-design-icons/Shopping.vue";
// import Earth from 'vue-material-design-icons/Earth.vue'
import instigram from "vue-material-design-icons/Instagram.vue";
import Facebook from "vue-material-design-icons/Facebook.vue";
import Youtube from "vue-material-design-icons/Youtube.vue";

import { ref } from "vue";
const openServises = ref(false);
const emit = defineEmits(["closeSideNav"]);
</script>

<template>
  <div
    id="overlay"
    class="fixed top-0 right-0 w-full h-full z-40 bg-black opacity-[.65]"
  ></div>
  <div>
    <CloseBox
      class="fixed top-0 right-[280px] cursor-pointer z-50"
      :size="40"
      @click="emit('closeSideNav')"
      fillColor="#fff"
    />
    <div
      class="fixed top-0 right-0 bg-[#cbb8a4] z-50 w-[280px] h-full text-right"
    >
      <ul class="">
        <router-link to="/">
          <div
            id="link"
            class="flex items-center justify-between hover:text-orange-300"
          >
            <ChevronLeft />
            <li class="cursor-pointer hover:text-[#fea555]">Home</li>
          </div>
        </router-link>
        <router-link to="">
          <div
            id="link"
            class="flex items-center justify-between hover:text-orange-300"
            @click="openServises = !openServises"
          >
            <ChevronLeft :class="openServises ? ' rotate-90' : 'rotate-0'" />
            <li class="cursor-pointer hover:text-[#fea555]">Services</li>
          </div>
          <ul
            v-if="openServises"
            class="z-20 bg-[#cea07e] p-3 rounded text-white w-full"
          >
            <div class="relative" id="subLinks">
              <router-link to="/video-production">
                <li
                  class="mb-3 text-sm cursor-pointer transition-all duration-500 hover:text-[#ffc600] hover:-translate-x-3"
                >
                  VIDEO PRODUCTION
                </li>
              </router-link>
              <router-link to="e-markting">
                <li
                  class="mb-3 text-sm cursor-pointer transition-all duration-500 hover:text-[#ffc600] hover:-translate-x-3"
                >
                  DIGITAL MARKTING
                </li>
              </router-link>
              <router-link to="/graphic-design">
                <li
                  class="mb-3 text-sm cursor-pointer transition-all duration-500 hover:text-[#ffc600] hover:-translate-x-3"
                >
                  GRAPHIC DESIGN
                </li>
              </router-link>
              <li
                class="mb-3 text-sm cursor-pointer transition-all duration-500 hover:text-[#ffc600] hover:-translate-x-3"
              ></li>
              <router-link to="/writing">
                <li
                  class="mb-3 text-sm cursor-pointer transition-all duration-500 hover:text-[#ffc600] hover:-translate-x-3"
                >
                  WRITING
                </li>
              </router-link>
              <router-link to="/photography">
                <li
                  class="mb-3 text-sm cursor-pointer transition-all duration-500 hover:text-[#ffc600] hover:-translate-x-3"
                >
                  PHOTOGRAPHY
                </li>
              </router-link>
              <router-link to="/mobile-app">
                <li
                  class="mb-3 text-sm cursor-pointer transition-all duration-500 hover:text-[#ffc600] hover:-translate-x-3"
                >
                  MOBILE APP
                </li>
              </router-link>
            </div>
          </ul>
        </router-link>
        <router-link to="">
          <div
            id="link"
            class="flex items-center justify-between hover:text-orange-300"
          >
            <ChevronLeft />
            <li class="cursor-pointer hover:text-[#fea555]">Projects</li>
          </div>
        </router-link>
        <router-link to="/contact-us">
          <div
            id="link"
            class="flex items-center justify-between hover:text-orange-300"
          >
            <ChevronLeft />
            <li class="cursor-pointer hover:text-[#fea555]">Contact</li>
          </div>
        </router-link>
      </ul>

      <div class="flex items-center justify-center gap-5 mt-10">
        <a href="https://www.instagram.com/version.9/"
          ><instigram :size="38"
        /></a>
        <a href="https://www.facebook.com/Version9media"
          ><Facebook :size="38"
        /></a>
        <a href="https://www.youtube.com/channel/UCU3XAMmvUnk4dehJjW1FCCw"
          ><Youtube :size="38"
        /></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#link {
  padding: 10px 15px;
  border-bottom: 1px solid #c9b9a7;
  cursor: pointer;
  position: relative;
  color: black;
}
#link::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 0%;
  background-color: black;
  opacity: 0.15;
  z-index: -1;
  transition: 0.5s ease-in-out;
}
#link:hover:before {
  width: 100%;
}
</style>
<style scoped>
li {
  text-transform: uppercase;
}
.router-link-active {
  color: #ffc600;
}
</style>
