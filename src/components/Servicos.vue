<script setup lang="ts">
import { Building2, House, PaintRoller } from "lucide-vue-next";
import CardServico from "./CardServico.vue";
</script>

<template>
  <section id="servicos" class="py-20 text-center">
    <div class="container mx-auto px-4">
      <h1 class="mb-4 text-4xl font-bold">
        Serviços com <span class="text-primary-400">excelência</span>
      </h1>
      <p class="mb-16 text-xl text-gray-600">
        Qualidade e profissionalismo em cada pincelada
      </p>

      <div class="grid gap-8 md:grid-cols-3">
        <CardServico
          titulo="Pintura Residencial"
          descricao="Transforme sua casa com cores que combinam com seu estilo de vida e personalidade."
          :icon="House"
        />
        <CardServico
          titulo="Pintura Comercial"
          descricao="Soluções profissionais para empresas, com execução rápida e sem interferir em suas operações."
          :icon="Building2"
        />
        <CardServico
          titulo="Texturização"
          descricao="Uma descricao muito genérica só pra preencher espaço do card."
          :icon="PaintRoller"
        />
      </div>
    </div>
  </section>
</template>
