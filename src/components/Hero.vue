<script setup lang="ts">
import { ArrowRight, CircleCheckBig } from "lucide-vue-next";
import { anos } from "../utils/date";
</script>

<template>
  <section id="hero" class="w-full py-14">
    <div
      class="container mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 px-4"
    >
      <div class="ship">
        <CircleCheckBig />
        {{ anos() }} anos de experiência
      </div>

      <h1 class="text-center text-6xl font-bold text-gray-900">
        Transforme sua casa com
        <br />
        <span class="text-primary-400">cores e qualidade</span>
      </h1>

      <p class="text-center text-xl text-gray-600">
        Pintura residencial e comercial com acabamento premium. Qualidade,
        pontualidade e limpeza em cada projeto.
      </p>

      <div class="flex items-center justify-center gap-4">
        <RouterLink to="#contato" class="btn">
          Solicitar Orçamento <ArrowRight />
        </RouterLink>
        <!-- prettier-ignore -->
        <RouterLink to="#portfolio" class="btn btn-border">
          Ver Projetos
        </RouterLink>
      </div>
    </div>
  </section>
</template>
