<script setup lang="ts">
import { Mail, MapPin, Phone } from "lucide-vue-next";
import { anos } from "../utils/date";
</script>

<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-16">
      <div class="grid gap-8 md:grid-cols-4">
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <img src="/logo.png" class="h-16" />
          </div>
          <p class="text-gray-400">
            Transformando ambientes com qualidade e profissionalismo há mais de
            {{ anos() }} anos.
          </p>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-semibold">Links Rápidos</h3>
          <ul class="space-y-2">
            <li>
              <RouterLink
                to="#servicos"
                class="hover:text-primary-400 text-gray-400 transition-colors"
              >
                Nossos Serviços
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="#portfolio"
                class="hover:text-primary-400 text-gray-400 transition-colors"
              >
                Portfólio
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="#contato"
                class="hover:text-primary-400 text-gray-400 transition-colors"
              >
                Contato
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-semibold">Serviços</h3>
          <ul class="space-y-2">
            <li class="text-gray-400">Pintura Residencial</li>
            <li class="text-gray-400">Pintura Comercial</li>
            <li class="text-gray-400">Texturização</li>
          </ul>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-semibold">Contato</h3>
          <ul class="space-y-4">
            <li>
              <a
                href="tel:+552799829-3293"
                class="hover:text-primary-400 flex items-center gap-2 text-gray-400 transition-colors"
              >
                <Phone class="text-primary-400" />
                +55 27 99829-3293
              </a>
            </li>
            <li>
              <a
                href="mailto:contato@welderbrin.com"
                class="hover:text-primary-400 flex items-center gap-2 text-gray-400 transition-colors"
                target="_blank"
              >
                <Mail class="text-primary-400" />
                contato@welderbrin.com
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/htA2YBj3hSD7t2nk6"
                target="_blank"
                class="hover:text-primary-400 flex items-center gap-2 text-gray-400 transition-colors"
              >
                <MapPin class="text-primary-400" />
                Colatina, ES
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 border-t border-gray-800 pt-8">
        <div
          class="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <p class="text-sm text-gray-400">
            © {{ new Date().getFullYear() }} Welder Bringhenti. Todos os
            direitos reservados.
          </p>
          <div class="flex gap-4">
            <RouterLink
              to="#"
              class="hover:text-primary-400 text-sm text-gray-400 transition-colors"
            >
              Política de Privacidade
            </RouterLink>
            <RouterLink
              to="#"
              class="hover:text-primary-400 text-sm text-gray-400 transition-colors"
            >
              Termos de Uso
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
