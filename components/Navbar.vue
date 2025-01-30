<template>
  <div class="fixed top-0 h-[10vh] w-full bg-white bg-opacity-[0.2] backdrop-blur-2xl z-50 border-b border-b-white flex justify-between items-center p-4">
    <NuxtLink to="/" @click="showMenu = false" class="h-full"><img draggable="false" src="/images/misc/logo-simple.png" alt="logo Villas Azur" class="h-full w-auto relative" /></NuxtLink>
    <button @click="showMenu = !showMenu" class="pointer-cursor"><Icon name="fluent:navigation-32-filled" class="text-logoBlue h-8 w-8" /></button>
    <Transition name="modal-right">
      <div v-if="showMenu === true" class="absolute top-full right-2 w-full lg:w-[20vw] rounded-b-xl bg-white border-b border-x border-logoBlue/50 shadow-2xl py-4">
        <nav class="flex flex-col items-center">
          <ul class="list-disc flex flex-col gap-4">
            <li class="text-xl text-logoBlue font-nunito uppercase font-bold"><NuxtLink to="/" @click="showMenu = false">Accueil</NuxtLink></li>
            <li class="text-xl text-logoBlue font-nunito uppercase font-bold"><NuxtLink to="/villas" @click="showMenu = false">Nos Villas</NuxtLink></li>
            <li class="text-xl text-logoBlue font-nunito uppercase font-bold"><NuxtLink to="/plan-sur-mesure" @click="showMenu = false">Plan Sur Mesure</NuxtLink></li>
            <li class="text-xl text-logoBlue font-nunito uppercase font-bold"><NuxtLink to="/investissement-ciop" @click="showMenu = false">Investissement CIOP</NuxtLink></li>
            <li class="text-xl text-logoBlue font-nunito uppercase font-bold"><NuxtLink to="/contact" @click="showMenu = false">Contactez-nous</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
const showMenu = ref(false);
</script>

<style scoped>
a.router-link-exact-active,
a.router-link-active {
  text-decoration: underline;
}
</style>
