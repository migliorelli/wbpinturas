<script setup lang="ts">
import { Clock, Medal, Star, User } from "lucide-vue-next";
import { anos } from "../utils/date";
</script>

<template>
  <section id="sobre" class="bg-gray-50 py-20">
    <div class="container mx-auto px-4">
      <div class="grid items-center gap-12 md:grid-cols-2">
        <div class="relative mb-12 md:mb-0" v-animate-on-view>
          <div class="aspect-square overflow-hidden rounded-2xl">
            <img
              src="/welder.jpg"
              alt="Welder Bringhenti"
              class="size-full object-cover"
            />
          </div>

          <div
            class="animate-float absolute bottom-0 left-1/2 flex max-w-sm -translate-x-1/2 translate-y-1/2 items-center gap-4 rounded-xl bg-white/80 p-6 shadow-md backdrop-blur-md md:bottom-8 md:left-8 md:translate-0"
          >
            <div class="text-center">
              <p class="text-primary-400 text-3xl font-bold">{{ anos() }}+</p>
              <p class="text-sm text-gray-600">Anos de Experiência</p>
            </div>
            <div class="text-center">
              <p class="text-primary-400 text-3xl font-bold">200+</p>
              <p class="text-sm text-gray-600">Projetos Concluídos</p>
            </div>
          </div>
        </div>

        <div class="space-y-4" v-animate-on-view>
          <div class="ship">
            <User />
            Sobre mim
          </div>

          <h1 class="mb-4 text-4xl font-bold">
            Transformando espaços com
            <span class="text-primary-400">paixão e dedicação</span>
          </h1>

          <p class="text-lg text-gray-600">
            Olá! Sou Welder Bringhenti, um pintor profissional com mais de
            {{ anos() }} anos de experiência no mercado. Minha jornada começou
            como ajudante e, ao longo dos anos, me especializei em diferentes
            técnicas e acabamentos.
          </p>

          <div class="flex gap-4">
            <div
              class="bg-primary-400/10 text-primary-400 grid size-12 place-items-center rounded-lg transition-colors"
            >
              <Star />
            </div>
            <div>
              <h3 class="mb-1 font-semibold text-gray-900">
                Qualidade Garantida
              </h3>
              <p class="text-gray-600">
                Utilizo apenas materiais de primeira linha e ofereço garantia em
                todos os serviços.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div
              class="bg-primary-400/10 text-primary-400 grid size-12 place-items-center rounded-lg transition-colors"
            >
              <Medal />
            </div>
            <div>
              <h3 class="mb-1 font-semibold text-gray-900">Profissionalismo</h3>
              <p class="text-gray-600">
                Comprometimento com prazos, limpeza e organização em cada
                projeto.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div
              class="bg-primary-400/10 text-primary-400 grid size-12 place-items-center rounded-lg transition-colors"
            >
              <Clock />
            </div>
            <div>
              <h3 class="mb-1 font-semibold text-gray-900">Pontualidade</h3>
              <p class="text-gray-600">
                Respeito ao seu tempo com cumprimento rigoroso dos prazos
                estabelecidos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
