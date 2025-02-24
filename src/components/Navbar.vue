<script setup lang="ts">
import { Phone } from "lucide-vue-next";
</script>

<template>
  <header
    class="fixed top-0 left-0 z-50 h-18 w-[100dvw] border-b border-gray-200 bg-white/80 backdrop-blur-md"
  >
    <div
      class="container mx-auto flex h-full w-full p-4 items-center justify-center px-4"
    >
      <RouterLink to="/">
        <img src="/logo.png" class="h-16" />
      </RouterLink>

      <ul class="hidden grow items-center justify-center gap-8 md:flex">
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

      <RouterLink to="#contato" class="btn shrink-0">
        <Phone />
        Solicitar Orçamento
      </RouterLink>
    </div>
  </header>
</template>
