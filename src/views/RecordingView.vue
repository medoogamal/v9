<script setup>
import MainLayout from "../layouts/MainLayout.vue";
import phone from "vue-material-design-icons/Phone.vue";
import email from "vue-material-design-icons/Email.vue";
import Earth from "vue-material-design-icons/Earth.vue";
import location from "vue-material-design-icons/LocationEnter.vue";
import instigram from "vue-material-design-icons/Instagram.vue";
import Facebook from "vue-material-design-icons/Facebook.vue";
import Youtube from "vue-material-design-icons/Youtube.vue";
import { ref } from "vue";
import ArrowRight from "vue-material-design-icons/ArrowRight.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";

let hanyshaker = ref(true);
let mohamed = ref(true);
function toggleValue() {
  hanyshaker.value = !hanyshaker.value; // Toggle the value between true and false
  mohamed.value = !mohamed.value; // Toggle the value between true and false
}

setInterval(toggleValue, 7000); // Toggle the value every 5 seconds
</script>

<template>
  <MainLayout>
    <div
      class="bg-gray-400 lg:h-full xl:h-full md:h-full overflow-hidden relative -z-10"
    >
      <img src="/images/recording.png" alt="" />
      <div
        class="absolute md:top-[28%] top-[35%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center"
      >
        <h1
          class="xl:text-7xl lg:text-5xl md:text-5xl text-2xl text-white font-serif mb-2"
        >
          <h2>
            <b class="font-extrabold uppercase">RECORDING</b>
            <span class="text-[#ffc600] font-extralight uppercase"
              >STUDIOS</span
            >
          </h2>
        </h1>
      </div>
    </div>

    <div class="section-9 -mt-1 relative py-20">
      <img
        src="/images/light.png"
        class="md:hidden block w-[85%] mb-5 mx-auto transition-all duration-1000 light-img"
        alt=""
      />
      <img
        src="/images/light.png"
        class="md:block hidden w-[85%] mb-5 mx-auto transition-all duration-1000 light-img"
        alt=""
        v-motion-pop-visible
      />
      <div
        class="markting text-center text-white pb-20 xl:my-52 lg:my-32 md:my-20 mx-4"
      >
        <h4
          class="md:block hidden text-xl md:text-3xl lg:text-4xl font-light"
          v-motion-slide-visible-bottom
        >
          Our cutting-edge sound studio offers a creative haven for crafting
          exceptional audio content. With state-of-the-art equipment and a
          meticulously designed acoustic environment, we ensure pristine sound
          quality for every project. Our experienced team of sound engineers and
          technicians are dedicated to bringing your vision to life with
          unparalleled clarity and depth. Elevate your audio production in our
          immersive sound studio, where innovation meets sonic excellence.
        </h4>
        <h4 class="md:hidden block text-xl md:text-3xl lg:text-4xl font-light">
          Our cutting-edge sound studio offers a creative haven for crafting
          exceptional audio content. With state-of-the-art equipment and a
          meticulously designed acoustic environment, we ensure pristine sound
          quality for every project. Our experienced team of sound engineers and
          technicians are dedicated to bringing your vision to life with
          unparalleled clarity and depth. Elevate your audio production in our
          immersive sound studio, where innovation meets sonic excellence.
        </h4>
      </div>
    </div>
  </MainLayout>
</template>
<style scoped>
.section-9:hover .light-img {
  width: 85%;
}
.section-9 {
  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgb(1, 96, 116) 0%,
    rgba(45, 46, 50, 1) 69%
  );
}
.section-10 {
  background-color: #ccbcac;
}
.section-12 {
  background-color: #33353e;
}

.fadeIn {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.section-before::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: -35px;
  background-image: url("../../public/images/Layerwithoutbackground1.png");
  background-size: cover;
  background-position: top;
  z-index: 2;
}

h3 {
  text-shadow: 5px 5px rgba(0, 0, 0, 0.5);
}
h2 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
  text-shadow: 10px 10px rgba(0, 0, 0, 0.5);
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

h1::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: white;
  top: 20px;
  left: -25px;
  border-radius: 50%;
  box-shadow: 0 0 10px white;
  animation: opacity 3s ease-in-out infinite;
}
h1::after {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  background-color: white;
  bottom: -20px;
  right: -40px;
  border-radius: 50%;
  box-shadow: 0 0 10px white;
  animation: opacity 3s ease-in-out infinite;
}
h2::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: white;
  bottom: -30px;
  left: 20%;
  border-radius: 50%;
  box-shadow: 0 0 14px white;
  animation: opacity 3s ease-in-out infinite;
}
h2::after {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  background-color: #ffc600;
  bottom: -85px;
  right: -105px;
  border-radius: 50%;
  box-shadow: 0 0 20px white;
  animation: opacity 3s ease-in-out infinite;
}

@keyframes opacity {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes textUp {
  from {
    opacity: 0.1;
    transform: translateY(-60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.production {
  background-color: #2a2b2f;
  border: 2px solid white;

  width: 100%;
  margin: 15px 0px;
  padding: 25px;
  border-radius: 56px;
  color: white;
  transition: 0.8s;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #ffc600;
}
.circle-bg {
  width: 250px;
  height: 250px;
  background-color: #2d2e32;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px #ddd;
}
.circle-text {
  position: relative;
  border: 10px solid #c49478;
  border-radius: 50%;
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0 10px #c49478;
  font-size: 22px;
  font-weight: bold;
  color: #c49478;
}
.circle-text.active::before {
  content: "";
  position: absolute;
  bottom: -29px;
  left: 50%;
  transform: translateX(-50%);
  border: 20px solid;
  border-color: #c49478 transparent transparent;
  z-index: 2;
}

.circle-text.active::after {
  content: "";
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  border-bottom: 100px solid #2d2e32;
  border-left: 25px solid #2d2e32;
  border-right: 25px solid #2d2e32;
  height: 0;
  width: 100px;
  border-color: #2d2e32 #2d2e32;
  z-index: 1;
}
@media (max-width: 767px) {
  .circle-bg {
    width: 110px;
    height: 110px;
  }
  .circle-text {
    position: relative;
    border: 10px solid #c49478;
    border-radius: 50%;
    width: 85px;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0 10px #c49478;
    font-size: 11px;
    font-weight: bold;
    color: #c49478;
  }
  .circle-text.active::before {
    content: "";
    position: absolute;
    bottom: -29px;
    left: 50%;
    transform: translateX(-50%);
    border: 13px solid;
    border-color: #c49478 transparent transparent;
    z-index: 2;
  }

  .circle-text.active::after {
    content: "";
    position: absolute;
    bottom: -16.5px;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 30px solid #2d2e32;
    border-left: 12px solid #2d2e32;
    border-right: 4px solid #2d2e32;
    height: 0;
    width: 48px;
    border-color: #2d2e32 #2d2e32;
    z-index: 1;
  }
}
</style>
