<script setup lang="ts">
import { GalleryHorizontal } from "lucide-vue-next";
import CardProjeto from "./CardProjeto.vue";

const BASE = import.meta.env.VITE_BASE_URL;
const projetos = [
  {
    titulo: "Cimento queimado",
    descricao: "Efeito de textura cimento queimado",
    imagem: "/portfolio/cimentoqueimado.jpg",
  },
  {
    titulo: "Catedral Paróquia Sagrado Coração de Jesus",
    descricao: "Pintura exterior na corda",
    imagem: "/portfolio/catedral.jpg",
  },
];
</script>

<template>
  <section id="portfolio" class="bg-gray-50 py-20">
    <div class="container mx-auto px-4 text-center">
      <div class="ship mb-4"><GalleryHorizontal /> Nossos Projetos</div>
      <h1 class="mb-4 text-4xl font-bold">
        Transformações <span class="text-primary-400">incríveis</span>
      </h1>
      <p class="mb-16 text-xl text-gray-600">
        Conheça alguns dos nossos trabalhos realizados
      </p>

      <div class="grid gap-8 md:grid-cols-3">
        <CardProjeto
          v-for="(projeto, index) in projetos"
          :titulo="projeto.titulo"
          :descricao="projeto.descricao"
          :imagem="BASE + projeto.imagem"
          v-animate-on-view="{ delay: 100 * index }"
        />
      </div>
    </div>
  </section>
</template>
