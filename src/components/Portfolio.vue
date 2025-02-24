<script setup lang="ts">
import { GalleryHorizontal } from "lucide-vue-next";
import CardProjeto from "./CardProjeto.vue";

const imagem =
  "https://projetaronline.com/wp-content/uploads/2022/08/P443-FOTOS_11-Foto-2.jpg";

const projetos = [
  { titulo: "Projeto 1", descricao: "Pintura residencial", imagem },
  { titulo: "Projeto 2", descricao: "Pintura residencial", imagem },
  { titulo: "Projeto 3", descricao: "Pintura residencial", imagem },
  { titulo: "Projeto 4", descricao: "Pintura residencial", imagem },
  { titulo: "Projeto 5  ", descricao: "Pintura residencial", imagem },
  { titulo: "Projeto 6", descricao: "Pintura residencial", imagem },
];
</script>

<template>
  <section id="portfolio" class="py-20 bg-gray-50">
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
          v-for="projeto in projetos"
          :titulo="projeto.titulo"
          :descricao="projeto.descricao"
          :imagem="projeto.imagem"
        />
      </div>
    </div>
  </section>
</template>
