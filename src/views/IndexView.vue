<script setup lang="ts">
import Contato from "../components/Contato.vue";
import Hero from "../components/Hero.vue";
import Navbar from "../components/Navbar.vue";
import Portfolio from "../components/Portfolio.vue";
import Rodape from "../components/Rodape.vue";
import Servicos from "../components/Servicos.vue";
import Sobre from "../components/Sobre.vue";
</script>

<template>
  <Navbar />
  <main class="w-full pt-18">
    <Hero />
    <Sobre />
    <Servicos />
    <Portfolio />
    <Contato />
  </main>
  <Rodape />
</template>
