<template>
  <section class="h-[100svh] relative p-5 lg:p-16 flex flex-col justify-end overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
      <Transition name="hero-fade">
        <img draggable="false" src="/images/villas/azur/beton/Image2.png" v-if="currentHero === 0" class="absolute top-0 left-0 w-full h-full object-cover animate-zoomHero" />
        <img draggable="false" src="/images/villas/azur/beton/Image4.png" v-else-if="currentHero === 1" class="absolute top-0 left-0 w-full h-full object-cover animate-zoomHero" />
        <img draggable="false" src="/images/villas/azur/beton/Image8.png" v-else-if="currentHero === 2" class="absolute top-0 left-0 w-full h-full object-cover animate-zoomHero" />
      </Transition>
    </div>
    <div class="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-darkBlue"></div>
    <h1 class="text-white text-3xl lg:text-[64px] relative font-arkhip" id="gsapTitle">
      <div v-for="word in title.split(' ')" class="inline-block">
        <span v-for="character in word.split('')" class="inline-block whitespace-pre opacity-100" ref="titleChars">{{ character }}</span>
        <span class="inline-block whitespace-pre opacity-100" ref="titleChars">{{ " " }}</span>
      </div>
      <!-- <span v-for="character in title.split('')" class="inline-block whitespace-pre opacity-100" ref="titleChars">{{ character }}</span> -->
    </h1>
  </section>
</template>

<script setup lang="ts">
import gsap from "gsap";

// const title = "Votre villa en martinique";
const title = "La signature caribeenne";
const titleChars = ref<HTMLDivElement[]>([]);

const currentHero = ref(0);

onMounted(() => {
  gsap.to("#gsapTitle", {
    scrollTrigger: {
      start: "top",
      end: "+=500",
      scrub: true,
    },
    opacity: 0,
  });
  for (let i = 0; i < titleChars.value.length; i++) {
    gsap.from(titleChars.value[i], {
      y: "100%",
      opacity: 0,
      delay: i * 0.025,
      duration: 0.5,
      ease: "power1.out",
    });
  }
  setInterval(() => {
    currentHero.value = (currentHero.value + 1) % 3;
  }, 8000);
});
</script>

<style scoped></style>
