<template>
  <header>
    <Navbar />
  </header>
  <main class="bg-darkBlue">
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Villas Azur",
  ogTitle: "Villas Azur",
  description: "Agence immobilière en martinique. Vente sur plan, création de plans personnalisés et investissements CIOP",
  ogDescription: "Agence immobilière en martinique. Vente sur plan, création de plans personnalisés et investissements CIOP",
});
</script>
