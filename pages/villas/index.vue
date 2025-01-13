<template>
  <div class="bg-darkBlue text-white w-full min-h-screen overflow-hidden pt-[calc(10vh+2rem)] px-[2.5vw]">
    <h1 class="text-2xl lg:text-[64px] lg:leading-[64px] font-bold lg:font-normal font-arkhip mb-4 lg:mb-8">Decouvrez nos villas</h1>
    <div class="grid grid-cols-1 lg:grid-cols-3 w-full gap-8">
      <article v-for="villa in villasList" class="w-full" ref="villaCards">
        <NuxtLink :to="`/villas/${villa.name}`" class="w-full">
          <img draggable="false" :src="`/images/villas/${villa.name}/${villa.image}`" class="w-full h-[70vh] object-cover" />
        </NuxtLink>
        <div class="flex justify-between mt-4">
          <h1 class="text-2xl font-bold lg:font-normal font-arkhip uppercase">modele {{ villa.name }}</h1>
          <p>{{ villa.surface }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import villasList from "@/assets/villas.json";

const villaCards = ref<HTMLDivElement[]>([]);

onMounted(() => {
  for (let i = 0; i < villaCards.value.length; i++) {
    gsap.from(villaCards.value[i], {
      y: "100%",
      opacity: 0,
      delay: i * 0.25,
      duration: 0.75,
      ease: "power1.out",
    });
  }
});
</script>

<style scoped></style>
