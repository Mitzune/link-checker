<template>
    <div class="flex h-14 w-full items-center justify-between p-4">
        <div class="flex items-center gap-2 text-3xl text-teal-400">
            <Icon name="tabler:rosette-discount-check-filled" />
            <h1>My Link</h1>
        </div>

        <div class="flex items-center gap-4 text-sky-400">
            <Icon
                :name="systemTheme.theme === 'dark' ? 'tabler:sun' : 'tabler:moon'"
                class="cursor-pointer"
                size="25"
                @click="() => systemTheme.toggleTheme()"
            />
            <Icon name="tabler:brand-github" class="rounded-full" size="25" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const systemTheme = useTheme()
</script>
