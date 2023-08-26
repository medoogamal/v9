<script setup>
import { ref } from "vue";
import HeaderSection from "../components/structure/HeaderSection.vue";
</script>
<template>
  <div>
    <HeaderSection />

    <main>
      <slot />
    </main>
  </div>
</template>
