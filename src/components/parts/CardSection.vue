<script setup></script>
<template>
  <div class="md:py-20 py-20 md:block hidden">
    <div
      class="shadow-md shadow-[#ecc94a] flex w-[80%] h-[320px] mx-auto border-4 border-[#f1f0d6] rounded-[55px]"
    >
      <div class="md:block hidden card-image relative w-[50%] overflow-x-clip">
        <img
          src="/images/Layer21.png"
          class="w-full h-[600px] absolute -top-[300px] left-0 scale-110 z-20 rounded-bl-[55px]"
          alt=""
        />
      </div>
      <div
        id="text"
        class="z-30 md:w-[50%] w-full bg-[#303336] text-white text-center p-10 md:px-14 md:rounded-tl-none md:rounded-bl-none rounded-tl-[55px] rounded-bl-[55px] rounded-tr-[55px] rounded-br-[55px]"
        v-motion-slide-visible-right
      >
        <h1
          class="xl:text-4xl lg:text-3xl md:text-2xl text-lg bold text-white font-serif mb-5"
        >
          ABOUT V9
        </h1>
        <p class="md:text-md text-sm">
          We can confidently tell you that by working with us, you will enjoy
          the style of work, the quality, and everything related to the field of
          media. with confidence and with the opinions of our customers, Version
          9 competes with the largest international companies in the same field
        </p>
      </div>
    </div>
  </div>

  <!-- on mobile screen -->
  <div class="md:py-80 py-20 md:hidden block">
    <div class="flex flex-col mx-2 border-4 border-[#f1f0d6] rounded-[55px]">
      <div class="card-image relative overflow-x-clip py-24">
        <img
          src="/images/Layer21.png"
          class="w-full h-[450px] absolute -top-[250px] z-20"
          alt=""
        />
      </div>
      <div
        id="text"
        class="md:w-[50%] w-full bg-[#303336] text-white text-center p-10 md:px-14 rounded-bl-[55px] rounded-br-[55px]"
      >
        <h1
          class="xl:text-4xl lg:text-3xl md:text-2xl text-lg bold text-white font-serif mb-5"
        >
          ABOUT V9
        </h1>
        <p class="md:text-md text-sm">
          We can confidently tell you that by working with us, you will enjoy
          the style of work, the quality, and everything related to the field of
          media. with confidence and with the opinions of our customers, Version
          9 competes with the largest international companies in the same field
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  animation: goIn 1s ease-in-out;
}

@keyframes goIn {
  from {
    transform: translateX(-1200px);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
