<script setup>
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
import RightArrow from "vue-material-design-icons/ArrowRight.vue";
import { ref } from "vue";

const first = ref(true);

function toggleValue() {
  first.value = !first.value; // Toggle the value between true and false
}

// setInterval(toggleValue, 5000); // Toggle the value every 5 seconds
</script>
<template>
  <div
    v-if="first"
    class="flex md:flex-row flex-col items-center"
    :class="first ? 'fadeIn' : 'fadeOut'"
  >
    <div class="md:w-[50%] w-[70%] hidden md:block mx-auto mb-10 md:mb-0">
      <img
        src="/images/triangle.png"
        class="w-full md:h-full absolute md:top-0 top-[210px] xl:-left-[290px] xl:w-[70%] md:-left-[190px] -left-[90px] h-[80%]"
        alt=""
      />
    </div>
    <div class="md:w-[50%] w-full px-10 md:ml-auto md:mt-20 z-20">
      <div>
        <h1
          class="xl:text-6xl lg:text-4xl md:text-5xl text-2xl font-serif mb-5 text-[#303034]"
        >
          WRITING
        </h1>
        <p class="text-lg lg:text-xl md:text-[#584f47] text-black">
          Writing a strong and different content or script for your movie or
          program is what will put you in the forefront of everyone, and this is
          what we always strive to do by being creative with difference.
        </p>
      </div>
      <div class="flex mt-10 mx-auto w-fit">
        <ChevronLeft :size="47" class="cursor-pointer hover:text-[#615321]" />
        <ChevronRight
          :size="47"
          class="cursor-pointer text-[#615321]"
          @click="first = false"
        />
      </div>
      <div class="flex gap-2 main-btn">
        <button>Let`s Talk Now !</button>
        <RightArrow :size="27" />
      </div>
    </div>
  </div>

  <div
    v-show="!first"
    :class="!first ? 'fadeIn' : 'fadeOut'"
    class="flex flex-col items-center"
  >
    <div class="md:w-[50%] w-[100%] hidden md:block mx-auto mb-10 md:mb-0 md:mt-20">
      <img
        src="/images/machine.png"
        class="w-full md:h-full absolute md:top-[100px] top-[290px] xl:w-[70%] left-[0px] h-[80%]"
        alt=""
      />
    </div>
    <div class="md:w-[50%] w-full px-10 md:ml-auto z-20">
      <div>
        <h1
          class="xl:text-6xl text-[#303034] lg:text-4xl md:text-5xl text-2xl font-serif mb-5"
        >
          RECORDING <br />STUDIO
        </h1>
        <p class="text-lg lg:text-xl md:text-[#584f47] text-black">
          Writing a strong and different content or script for your movie or
          program is what will put you in the forefront of everyone, and this is
          what we always strive to do by being creative with difference.
        </p>
      </div>
      <div class="flex mt-10 mx-auto w-fit">
        <ChevronLeft
          :size="47"
          class="cursor-pointer text-[#615321]"
          @click="first = true"
        />
        <ChevronRight :size="47" class="cursor-pointer hover:text-[#615321]" />
      </div>
      <div class="flex gap-2 main-btn">
        <button>Let`s Talk Now !</button>
        <RightArrow :size="27" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.main-btn {
  background-color: #cdc2b7;
  width: fit-content;
  padding: 23px;
  border-radius: 25px;
  font-weight: 500;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 10px #595252;
}

.fadeIn {
  animation: fadeIn 2s ease-in-out;
}
.fadeOut {
  animation: fadeOut 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
