<script setup lang="ts">
import type { LucideProps } from "lucide-vue-next";
import type { FunctionalComponent } from "vue";

interface Props {
  titulo: string;
  descricao: string;
  icon: FunctionalComponent<LucideProps, {}, any, {}>;
}

defineProps<Props>();
</script>

<template>
  <div
    class="group space-y-2 rounded-xl bg-white p-6 text-start shadow transition-all hover:shadow-md"
  >
    <div
      class="bg-primary-400/10 group-hover:bg-primary-400/20 text-primary-400 grid size-12 place-items-center rounded-lg transition-colors"
    >
      <component :is="icon" :size="28" />
    </div>
    <p class="text-lg font-semibold text-gray-900">{{ titulo }}</p>
    <p class="text-gray-600">{{ descricao }}</p>
  </div>
</template>
