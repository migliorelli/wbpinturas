<script setup lang="ts">
import { Phone } from "lucide-vue-next";
</script>

<template>
  <header
    class="fixed top-0 left-0 z-50 h-18 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md"
  >
    <div
      class="container mx-auto flex h-full w-full justify-between p-4 px-4 md:grid md:grid-cols-3 md:content-center"
    >
      <div class="flex items-center justify-start">
        <RouterLink to="/" class="shrink-0">
          <img src="/logo.png" class="h-16" />
        </RouterLink>
      </div>

      <ul class="hidden items-center justify-center gap-8 md:flex">
        <li>
          <RouterLink to="#servicos" class="nav-link">Serviços</RouterLink>
        </li>
        <li>
          <RouterLink to="#portfolio" class="nav-link">Portfólio</RouterLink>
        </li>
        <li>
          <RouterLink to="#sobre" class="nav-link">Sobre</RouterLink>
        </li>
      </ul>

      <div class="flex items-center justify-end">
        <RouterLink to="#contato" class="btn shrink-0">
          <Phone />
          Solicitar Orçamento
        </RouterLink>
      </div>
    </div>
  </header>
</template>
