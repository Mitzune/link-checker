<template>
    <button
        class="flex w-full items-center justify-center gap-2 rounded-md border border-teal-400 bg-teal-500 px-4 py-2 text-slate-800 hover:bg-teal-500/80"
        :class="className"
    >
        <slot name="prefix" />
        <slot />
        <slot name="suffix" />
    </button>
</template>

<script lang="ts" setup>
defineProps<{
    className?: string
}>()
</script>
