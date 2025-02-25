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
      :alt="`$${titulo} - ${descricao}`"
      class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div
      class="absolute inset-0 flex h-full w-full flex-col items-start justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-start transition-opacity duration-300 group-hover:opacity-100 md:opacity-0"
    >
      <p class="text-xl font-semibold text-white">{{ titulo }}</p>
      <p class="text-white/80">{{ descricao }}</p>
    </div>
  </div>
</template>
