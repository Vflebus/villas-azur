<template>
  <section class="relative h-screen flex flex-col justify-center items-center">
    <!-- <h2 class="text-white text-[3vw] font-nunito">Nos solutions</h2> -->
    <nav class="w-full grow flex flex-col lg:flex-row bg-darkBlue cursor-pointer relative overflow-hidden">
      <img draggable="false" :src="`/images/misc/${backgroundImg}`" class="w-full h-full object-cover absolute top-0 left-0" />
      <div class="w-full h-full absolute top-0 left-0 bg-black opacity-30"></div>
      <NuxtLink to="/villas" class="card border-b lg:border-b-0 lg:border-r group" @touchstart="backgroundImg = 'port.jpg'" @mouseenter="backgroundImg = 'port.jpg'">
        <div class="bg-blur"></div>
        <h2 class="relative font-arkhip text-2xl lg:text-[56px] lg:leading-[56px] text-center">
          <span class="block">Construction</span>
          <span class="block">sur plan</span>
        </h2>
        <p class="relative text-sm text-center hidden group-hover:block">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias quaerat, officia consectetur molestias nemo beatae corrupti ab dicta possimus dolorem? Laboriosam optio ipsam
          voluptatibus sapiente fuga nesciunt sunt officiis.
        </p>
      </NuxtLink>
      <NuxtLink to="/plan-sur-mesure" class="card group box-border border-y lg:border-y-0 lg:border-x" @touchstart="backgroundImg = 'foret.webp'" @mouseenter="backgroundImg = 'foret.webp'">
        <div class="bg-blur"></div>
        <h2 class="relative font-arkhip text-2xl lg:text-[56px] lg:leading-[56px] text-center">
          <span class="block">Plan</span>
          <span class="block">sur mesure</span>
        </h2>
        <p class="relative text-sm text-center hidden group-hover:block">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias quaerat, officia consectetur molestias nemo beatae corrupti ab dicta possimus dolorem? Laboriosam optio ipsam
          voluptatibus sapiente fuga nesciunt sunt officiis.
        </p>
      </NuxtLink>
      <NuxtLink to="/investissement-ciop" class="card border-t lg:border-t-0 lg:border-l group" @touchstart="backgroundImg = 'plage.webp'" @mouseenter="backgroundImg = 'plage.webp'">
        <div class="bg-blur"></div>
        <h2 class="relative font-arkhip text-2xl lg:text-[56px] lg:leading-[56px] text-center">
          <span class="block">Investissement</span>
          <span class="block">CIOP</span>
        </h2>
        <p class="relative text-sm text-center hidden group-hover:block">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit alias quaerat, officia consectetur molestias nemo beatae corrupti ab dicta possimus dolorem? Laboriosam optio ipsam
          voluptatibus sapiente fuga nesciunt sunt officiis.
        </p>
      </NuxtLink>
    </nav>
  </section>
</template>

<script setup lang="ts">
const backgroundImg = ref<"plage.webp" | "foret.webp" | "port.jpg" | "">("port.jpg");
</script>

<style scoped>
.card {
  @apply h-1/3 lg:h-full lg:w-1/3 relative flex flex-col justify-center items-center gap-4 text-white text-2xl lg:text-3xl p-16 shrink-0;
}
.bg-blur {
  @apply absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-0 transition-all group-hover:bg-opacity-[0.2] group-hover:backdrop-blur-2xl;
}
</style>
