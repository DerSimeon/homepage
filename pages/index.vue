<script lang="ts" setup>
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

async function particlesInit(engine: Engine) {
  await loadFull(engine);
}

const options = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    color: {
      value: "#091a28",
    },
  },
  particles: {
    color: {
      value: "#fff",
    },
    links: {
      color: "#fff",
      enable: true,
    },
    move: {
      enable: true,
    },
    number: {
      value: 200,
    },
  },
};

function handleParticleAmount() {
  const mediaQuerySmall = window.matchMedia("(max-width: 640px)");
  const mediaQueryBig = window.matchMedia("(min-width: 1024px)");
  const mediaQueryHuge = window.matchMedia("(min-width: 1536px)");
  if (mediaQuerySmall.matches) {
    options.particles.number.value = 50;
  } else if (mediaQueryBig.matches) {
    options.particles.number.value = 100;
  } else if (mediaQueryHuge.matches) {
    options.particles.number.value = 200;
  } else {
    options.particles.number.value = 150;
  }
}

onMounted(() => {
  handleParticleAmount();
  const content = document.getElementById("content");
  if (!content) return;
  const parent = content.parentElement;
  if (!parent) return;
  const animation = parent.animate([{ height: "0%" }, { height: "35%" }], {
    duration: 1000,
    easing: "ease-in-out",
    fill: "forwards",
  });

  animation.onfinish = () => {
    content.classList.remove("hidden");
    content.animate([{ opacity: 0 }, { opacity: 100 }], {
      duration: 1000,
      easing: "ease-in-out",
      fill: "forwards",
    });
  };
});
</script>

<template>
  <div class="h-full w-full">
    <div class="fixed top-0 left-0 flex items-center justify-center h-full w-full">
      <div
        class="h-0 w-full m-2 lg:m-0 lg:w-1/2 2xl:w-1/3 bg-gray-700 bg-opacity-40 rounded-xl shadow-l shadow-black"
      >
        <div id="content" class="hidden text-white h-full w-full opacity-0">
          <div class="flex flex-col items-center h-24 w-full pt-1">
            <h1 class="text-2xl 2xl:text-4xl font-bold">
              Simeon Libelt @ <a href="https://endava.com" class="text-[#EB5A21]">Endava Berlin</a>
            </h1>
          </div>
          <div class="flex flex-col items-center justify-center h-1/3">
            <h1 class="text-xl font-bold mb-1">A few things I work with:</h1>
            <div class="h-1 w-1/2 bg-white rounded-full"></div>
            <div class="grid grid-cols-3 gap-y-4 p-1">
              <nuxt-img
                height="24"
                src="https://img.shields.io/badge/-Java-007396?style=for-the-badge&logo=java&logoColor=white"
                alt="Java"
              />
              <nuxt-img
                height="24"
                src="https://img.shields.io/badge/-Kotlin-0095D5?style=for-the-badge&logo=kotlin&logoColor=white"
                alt="Kotlin"
              />
              <nuxt-img
                height="24"
                src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
                alt="TypeScript"
              />
              <nuxt-img
                height="24"
                src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"
                alt="JavaScript"
              />
              <nuxt-img
                height="24"
                src="https://img.shields.io/badge/-Nuxt.js-00C58E?style=for-the-badge&logo=nuxt.js&logoColor=white"
                alt="Nuxt.js"
              />
              <nuxt-img
                height="24"
                src="https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"
                alt="Next.js"
              />
              <nuxt-img
                height="24"
                src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=white"
                alt="React"
              />
              <nuxt-img
                height="24"
                src="https://img.shields.io/badge/-Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white"
                alt="Vue.js"
              />
              <nuxt-img
                height="24"
                src="https://img.shields.io/badge/-JetBrains-000000?style=for-the-badge&logo=jetbrains&logoColor=white"
                alt="JetBrains"
              />
              <nuxt-img
                height="24"
                src="https://img.shields.io/badge/-MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"
                alt="MySQL"
              />
              <nuxt-img
                height="24"
                src="https://img.shields.io/badge/-RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white"
                alt="RabbitMQ"
              />
              <nuxt-img
                height="24"
                src="https://img.shields.io/badge/-Google%20Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white"
                alt="Google Cloud"
              />
            </div>
          </div>
          <div class="flex flex-col items-center justify-center h-1/3 mt-6">
            <h1 class="text-xl font-bold">Find me on</h1>
            <div class="h-0.5 w-full bg-white rounded-full opacity-25"></div>
            <div class="flex flex-row items-center justify-center space-x-4">
              <a href="https://github.com/DerSimeon" class="text-[#EB5A21]">Github</a>
              <a href="mailto:hi@simeon.lol" class="text-[#EB5A21]">Mail</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vue-particles id="particles" :options="options" :particles-init="particlesInit" />
  </div>
</template>
