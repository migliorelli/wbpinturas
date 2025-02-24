<script setup lang="ts">
interface Props {
  titulo: string;
  descricao: string;
  imagem: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="group relative aspect-square overflow-hidden rounded-xl shadow hover:shadow-md"
  >
    <img
      :src="imagem"
      class="h-full transition-transform duration-300 group-hover:scale-110"
    />
    <div
      class="absolute inset-0 flex h-full w-full flex-col items-start justify-end bg-gradient-to-t from-black/60 to-transparent p-6 md:opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <p class="font-semibold text-white text-xl">{{ titulo }}</p>
      <p class="text-white/80">{{ descricao }}</p>
    </div>
  </div>
</template>
