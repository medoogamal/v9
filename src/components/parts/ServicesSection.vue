<script setup>
// import Swiper core and required modules
import { Navigation, Autoplay, A11y } from "swiper/modules";
const modules = [Navigation, Autoplay, A11y];
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, ref } from "vue";

// Function to update swiper slides per view based on screen size
let swiperSlidesPerView = ref(3);
const updateSlidesPerView = () => {
  if (window.innerWidth >= 768 && window.innerWidth < 1100) {
    swiperSlidesPerView.value = 2;
  } else if (window.innerWidth >= 1100) {
    swiperSlidesPerView.value = 3;
  } else {
    swiperSlidesPerView.value = 1;
  }
};

// Update swiper slides per view on window resize
onMounted(() => {
  window.addEventListener("resize", updateSlidesPerView);
});
onMounted(() => {
  updateSlidesPerView();
});
</script>
<template>
  <div
    class="bg-[#9b7d69] px-5 py-5 services-container relative overflow-hidden"
  >
    <div class="lg:container lg:mx-auto lg:px-20 px-0">
      <swiper
        :modules="modules"
        :slides-per-view="swiperSlidesPerView"
        :space-between="50"
        navigation
        :autoplay="{
          delay: 7000,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide>
          <div
            class="slide-div h-[530px] w-[300px] mx-auto relative text-center border-2"
            v-motion-pop-visible
          >
            <img src="/images/Layer12.png" class="w-full h-full" alt="" />
            <h1
              class="text-2xl absolute bottom-0 text-white left-[50%] -translate-x-[50%] mb-10"
            >
              VIDEO <br />
              <b>PRODUCTION</b>
            </h1>
          </div>
        </swiper-slide>
        <swiper-slide
          ><div
            class="slide-div h-[530px] w-[300px] mx-auto relative text-center border-2"
            v-motion-pop-visible
          >
            <img src="/images/Layer11.png" class="w-full h-full" alt="" />
            <h1
              class="text-2xl absolute bottom-0 text-white left-[50%] -translate-x-[50%] mb-10"
            >
              VIDEO <br />
              <b>PRODUCTION</b>
            </h1>
          </div></swiper-slide
        >
        <swiper-slide
          ><div
            class="slide-div h-[530px] w-[300px] mx-auto relative text-center border-2"
            v-motion-pop-visible
          >
            <img src="/images/Layer12.png" class="w-full h-full" alt="" />
            <h1
              class="text-2xl absolute bottom-0 text-white left-[50%] -translate-x-[50%] mb-10"
            >
              VIDEO <br />
              <b>PRODUCTION</b>
            </h1>
          </div></swiper-slide
        >
        <swiper-slide
          ><div
            class="slide-div h-[530px] w-[300px] mx-auto relative text-center border-2"
            v-motion-pop-visible
          >
            <img src="/images/Layer11.png" class="w-full h-full" alt="" />
            <h1
              class="text-2xl absolute bottom-0 text-white left-[50%] -translate-x-[50%] mb-10"
            >
              VIDEO <br />
              <b>PRODUCTION</b>
            </h1>
          </div></swiper-slide
        >
        <swiper-slide
          ><div
            class="slide-div h-[530px] w-[300px] mx-auto relative text-center border-2"
            v-motion-pop-visible
          >
            <img src="/images/Layer12.png" class="w-full h-full" alt="" />
            <h1
              class="text-2xl absolute bottom-0 text-white left-[50%] -translate-x-[50%] mb-10"
            >
              VIDEO <br />
              <b>PRODUCTION</b>
            </h1>
          </div></swiper-slide
        >
        ...
      </swiper>
    </div>
  </div>
</template>
<style>
.swiper-button-prev,
.swiper-button-next {
  color: white !important;
}
.swiper-button-prev:after {
  margin-left: 15px !important;
}
.swiper-button-next:after {
  margin-right: 15px !important;
}
.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 50px !important;
  font-weight: 900;
}
.swiper-slide {
  width: 100%;
}
.swiper-slide:not(.swiper-slide-next) {
  opacity: 0.5;
}
.swiper-slide-next .slide-div {
  border-color: #ffc600;
  transition: 0.5s;
}
.services-container::before {
  content: "";
  position: absolute;
  background-image: url("/images/Layer\ 15.png");
  width: 100%;
  height: 100%;
  z-index: 15;
  top: 380px;
  left: 405px;
}
</style>
