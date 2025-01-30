<template>
  <section class="text-white text-center px-16 pb-40 pt-20 flex flex-col gap-8 items-center relative" id="presentationSection">
    <img draggable="false" src="/images/misc/palm.png" class="absolute top-0 left-0 -translate-x-1/2 w-[40vw] h-auto palmAnimate z-50 pointer-events-none" />
    <div class="absolute top-0 right-0 -scale-x-100 z-50 pointer-events-none">
      <img draggable="false" src="/images/misc/palm.png" class="w-[40vw] h-auto palmAnimate -translate-x-1/2" />
    </div>
    <div class="absolute top-40 right-0 lg:static flex justify-center items-center w-[15vw] lg:w-[10vw] self-end">
      <div class="lightball_orange absolute" id="sunGlow"></div>
      <Icon name="guidance:sun" class="w-full h-[15vw] lg:h-[10vw] text-white" id="sun" />
    </div>
    <div class="self-start lg:w-[50vw] flex flex-col gap-8">
      <h2 class="text-2xl lg:text-[64px] lg:leading-[64px] font-nunito font-bold lg:font-normal">Des habitations modernes pour un mode de vie simple et durable.</h2>
      <p class="text-lg lg:text-2xl">
        Nous avons développé nos modèles de villa avec un cabinet d’architecte pour obtenir un style très agréable et moderne. Elles ont des parties jour et nuit séparées. Votre villa est disponible
        en béton banché ou en ossature bois.
      </p>
    </div>
    <img draggable="false" src="/images/misc/hibiscus-half.png" class="absolute left-0 bottom-0 w-[10vw]" id="hibiscus" />
    <div class="self-end lg:w-[50vw] flex flex-col gap-8 pt-20 lg:pt-40" id="teamPresentation">
      <h2 class="text-2xl lg:text-[64px] lg:leading-[64px] font-nunito font-bold lg:font-normal">Une équipe de confiance pour une installation sereine et de qualité.</h2>
      <p class="text-lg lg:text-2xl">
        Vos plans et le dépôt de permis seront réalisés par notre archetecte DPLG, l’organisation et suivi de votre chantier sera géré par un maitre d’œuvre expérimenté et assuré.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from "gsap";

onMounted(() => {
  gsap.from("#sunGlow", {
    scrollTrigger: {
      trigger: "#presentationSection",
      start: "top center",
      end: "+=500",
      scrub: true,
    },
    opacity: 0,
  });
  gsap.to("#sun", {
    scrollTrigger: {
      trigger: "#presentationSection",
      start: "top center",
      end: "+=500",
      scrub: true,
    },
    color: "orange",
  });
  gsap.to("#hibiscus", {
    // xPercent: -100,
    y: "-50vh",
    ease: "none",
    scrollTrigger: {
      trigger: "#teamPresentation",
      scrub: 1,
    },
  });
  gsap.to(".palmAnimate", {
    rotateZ: "-180deg",
    transformOrigin: "top left",
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: "#presentationSection",
      start: "top bottom",
      end: "+=1000",
      scrub: 1,
    },
  });
});
</script>

<style scoped>
.lightball_orange {
  width: 0;
  height: 0;
  box-shadow: 2.5vw 2.5vw 10vw 2.5vw white, -2.5vw -2.5vw 10vw 2.5vw white, 2.5vw -2.5vw 10vw 2.5vw white, -2.5vw 2.5vw 10vw 2.5vw white, 5vw 5vw 20vw 5vw #ff7e00, -5vw -5vw 20vw 5vw #ff7e00,
    5vw -5vw 20vw 5vw #ff7e00, -5vw 5vw 20vw 5vw #ff7e00;
}
</style>
