<script setup lang="ts">
import { Clock, Mail, MapPin, Phone } from "lucide-vue-next";

const sendMessage = (e: Event) => {
  const form = e.target as HTMLFormElement;
  const data = new FormData(form);

  const nome = data.get("nome");
  const email = data.get("email");
  const tel = data.get("tel");
  const mensagem = data.get("mensagem");

  console.log(nome, email, tel, mensagem);
};
</script>

<template>
  <section id="contato" class="py-20">
    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-5xl">
        <div class="grid gap-12 md:grid-cols-2">
          <div class="text-start" v-animate-on-view="{ delay: 0 }">
            <h1 class="mb-4 text-4xl font-bold">
              Entre em <span class="text-primary-400">contato</span>
            </h1>
            <p class="mb-8 text-xl text-gray-600">
              Estamos prontos para transformar seu ambiente
            </p>

            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div
                  class="bg-primary-400/10 text-primary-400 grid size-12 place-items-center rounded-lg transition-colors"
                >
                  <Phone />
                </div>
                <div>
                  <h3 class="font-semibold">Telefone</h3>
                  <p class="text-gray-600">+55 27 99829-3293</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div
                  class="bg-primary-400/10 text-primary-400 grid size-12 place-items-center rounded-lg transition-colors"
                >
                  <Mail />
                </div>
                <div>
                  <h3 class="font-semibold">E-mail</h3>
                  <p class="text-gray-600">contato@welderbrin.com</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div
                  class="bg-primary-400/10 text-primary-400 grid size-12 place-items-center rounded-lg transition-colors"
                >
                  <MapPin />
                </div>
                <div>
                  <h3 class="font-semibold">Endereço</h3>
                  <p class="text-gray-600">Colatina, ES</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div
                  class="bg-primary-400/10 text-primary-400 grid size-12 place-items-center rounded-lg transition-colors"
                >
                  <Clock />
                </div>
                <div>
                  <h3 class="font-semibold">Horário</h3>
                  <p class="text-gray-600">Segunda a Sábado: 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="rounded-2xl bg-white p-8 shadow-sm"
            v-animate-on-view="{ delay: 100 }"
          >
            <form class="space-y-4" @submit.prevent="sendMessage">
              <input
                class="input"
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome"
              />
              <input
                class="input"
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
              />
              <input
                class="input"
                type="tel"
                name="tel"
                id="tel"
                placeholder="Telefone"
              />
              <textarea
                class="input"
                name="mensagem"
                id="mensagem"
                placeholder="Mensagem"
              ></textarea>
              <button type="submit" class="btn w-full">Enviar mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
