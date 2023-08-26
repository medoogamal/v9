<script setup></script>
<template>
  <div class="md:py-20 py-20 md:block hidden -translate-y-[320px]">
    <div
      class="shadow-md shadow-[#ecc94a] flex w-[80%] h-[320px] mx-auto border-4 border-[#f1f0d6] rounded-[55px] overflow-hidden"
    >
      <div class="md:block hidden card-image relative w-[50%] overflow-x-clip">
        <img
          src="/images/Layer45.png"
          class="w-full h-full z-20 rounded-bl-[55px]"
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
  <div class="md:py-80 py-5 md:hidden block -translate-y-[296px]">
    <div
      class="flex flex-col mx-2 border-4 border-[#f1f0d6] rounded-[55px] overflow-hidden"
    >
      <div class="card-image relative overflow-hidden py-24">
        <img
          src="/images/Layer45.png"
          class="w-full absolute -top-12 z-20"
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
.card-image::before {
  content: "";
  position: absolute;
  width: 605px;
  left: -31px;
  z-index: -10;
  top: -10px;
  height: 100%;
  /*background-image: url(/images/Layer20.png);*/
  background-color: #cdac91;
}
</style>
