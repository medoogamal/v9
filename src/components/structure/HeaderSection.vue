<script setup>
import { onBeforeUnmount, onMounted, onUnmounted, ref } from "vue";
import ChevronUp from "vue-material-design-icons/ChevronUp.vue";
import SideNav from "../../components/structure/SideNav.vue";

const openSideNave = ref(false);
const isScroll = ref(false);
const openServises = ref(true);
const handleScroll = () => {
  isScroll.value = window.scrollY > 0;
};
const upPage = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
const progressBarWidth = ref("0%");

const updateProgressBar = () => {
  const scrollPercentage =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progressBarWidth.value = `${scrollPercentage}%`;
};

onMounted(() => {
  window.addEventListener("scroll", updateProgressBar);
  openServises.value = false;
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateProgressBar);
});
</script>
<template>
  <!--  :class="{
      'bg-header bg-[#242222] border-b border-[#3c3e41]': isScroll,
    }" -->
  <div class="bg-transparent absolute w-full py-2 md:h-[78px] h-[65px] z-30">
    <!-- large screen -->
    <div
      class="md:flex hidden container mx-auto px-2 items-center justify-between"
    >
      <div><img src="/images/logo.png" class="w-[65px] h-[65px]" alt="" /></div>
      <div>
        <ul class="flex gap-5">
          <router-link to="/">
            <li
              :class="isScroll ? '' : 'before:!-bottom-2'"
              class="hover:text-[#ffc600] link"
            >
              Home
            </li>
          </router-link>
          <div class="relative">
            <li
              :class="isScroll ? '' : 'before:!-bottom-2'"
              class="hover:text-[#cea07e] link"
              @click="openServises = !openServises"
            >
              Services
            </li>
            <ul
              v-if="openServises"
              class="absolute z-20 bg-[#cea07e] w-[220px] p-3 rounded text-white -left-2 top-8"
            >
              <div class="relative" id="subLinks">
                <router-link to="/video-production">
                  <li
                    class="mb-3 text-sm cursor-pointer transition-all duration-500 hover:text-[#ffc600] hover:translate-x-3"
                  >
                    VIDEO PRODUCTION
                  </li>
                </router-link>
                <router-link to="e-markting">
                  <li
                    class="mb-3 text-sm cursor-pointer transition-all duration-500 hover:text-[#ffc600] hover:translate-x-3"
                  >
                    DIGITAL MARKTING
                  </li>
                </router-link>
                <router-link to="/graphic-design">
                  <li
                    class="mb-3 text-sm cursor-pointer transition-all duration-500 hover:text-[#ffc600] hover:translate-x-3"
                  >
                    GRAPHIC DESIGN
                  </li>
                </router-link>
                <li
                  class="mb-3 text-sm cursor-pointer transition-all duration-500 hover:text-[#ffc600] hover:translate-x-3"
                ></li>
                <router-link to="/writing">
                  <li
                    class="mb-3 text-sm cursor-pointer transition-all duration-500 hover:text-[#ffc600] hover:translate-x-3"
                  >
                    WRITING
                  </li>
                </router-link>
                <router-link to="/photography">
                  <li
                    class="mb-3 text-sm cursor-pointer transition-all duration-500 hover:text-[#ffc600] hover:translate-x-3"
                  >
                    PHOTOGRAPHY
                  </li>
                </router-link>
                <router-link to="/mobile-app">
                  <li
                    class="mb-3 text-sm cursor-pointer transition-all duration-500 hover:text-[#ffc600] hover:translate-x-3"
                  >
                    MOBILE APP
                  </li>
                </router-link>
              </div>
            </ul>
          </div>
          <li
            :class="isScroll ? '' : 'before:!-bottom-2'"
            class="hover:text-[#ffc600] link"
          >
            Projects
          </li>
          <router-link to="/contact-us">
            <li
              :class="isScroll ? '' : 'before:!-bottom-2'"
              class="hover:text-[#ffc600] link"
            >
              contact
            </li>
          </router-link>
        </ul>
      </div>
    </div>
    <!-- large screen -->

    <!-- mobile screen -->
    <div
      class="md:hidden container mx-auto md:px-2 px-5 flex items-center justify-between"
    >
      <div>
        <img src="/images/logo.png" class="w-[53px] h-[53px]" alt="" />
      </div>
      <div>
        <img
          src="/images/dotesIcon.png"
          class="w-[25px] -mt-2 cursor-pointer"
          alt=""
          @click="openSideNave = true"
        />
      </div>
    </div>
    <!-- mobile screen -->
    <div class="fixed z-50 top-0 progress-bar h-[5px] w-full">
      <div
        class="filled z-50 bg-[#ffc600] h-full w-0"
        :style="{ width: progressBarWidth }"
      ></div>
    </div>
  </div>
  <div
    @click="upPage"
    v-if="isScroll"
    class="bg-black fixed z-50 bottom-5 rounded-xl left-4 cursor-pointer hover:bg-slate-600"
  >
    <ChevronUp fillColor="#fff" :size="50" />
  </div>
  <SideNav v-if="openSideNave" @closeSideNav="openSideNave = false" />
</template>
<style scoped>
.router-link-active li {
  color: #ffc600;
}
/*
.bg-header {
  background-image: url(/images/website\ screen\ size.png);
  background-repeat: no-repeat, repeat;
  background-size: cover;
}*/
ul li {
  text-transform: uppercase;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: 0.5s;
  position: relative;
}
ul li.link:before {
  content: "";
  position: absolute;
  bottom: -24px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #ffc600;
  transition: 0.5s;
}
ul li.link:hover:before {
  width: 100%;
}
#subLinks::before {
  content: "";
  position: absolute;
  top: -32px;
  left: 7px;
  border: 10px solid;
  border-color: transparent transparent #cea07e transparent;
}
</style>
