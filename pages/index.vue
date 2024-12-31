<template>
    <div class="flex flex-col items-center gap-6 md:w-1/2">
        <h1
            class="m-auto w-4/5 cursor-pointer rounded-2xl border border-teal-300 px-2 py-0.5 text-center text-teal-300 md:w-auto"
            @click="() => addCountCustom(1)"
        >
            Mitzune's Nuxt3 Starter v{{ counter.count }}.0
        </h1>

        <p class="text-xl font-bold text-teal-400 md:text-6xl">Nuxt 3 Starter Template</p>
        <p class="w-4/5 text-lg leading-8 text-white">
            A modern, pre-configured Nuxt 3 starter template with TypeScript, ESLint, Prettier, Tailwind, and Husky
            integration. Jumpstart your Nuxt js projects with best practices and optimized development workflows.
        </p>

        <div class="flex w-4/5 flex-col gap-4 md:flex-row md:justify-evenly">
            <a href="https://github.com/Mitzune/nuxt3-starter-simple" target="_blank">
                <Button>
                    <template #prefix>
                        <Icon name="carbon:logo-github" class="size-6" />
                    </template>
                    <span>Starter Github</span>
                </Button>
            </a>
            <a href="https://nuxt.com/" target="_blank">
                <Button class-name="!bg-teal-800 text-teal-400">
                    Learn more about Nuxt3
                    <template #suffix>
                        <Icon name="carbon:arrow-right" class="size-6" />
                    </template>
                </Button>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
const counter = useCounterStore()
const { addCountCustom } = useCount()
</script>
