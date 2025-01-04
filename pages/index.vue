<template>
    <div class="flex min-h-[calc(100dvh-7rem)] w-full flex-col items-center justify-center gap-6">
        <div class="flex w-4/5 flex-col gap-2">
            <input
                v-model="url"
                class="rounded-md border-2 border-teal-400 bg-transparent p-2 text-teal-400"
                placeholder="Enter Link"
            />
            <button class="rounded-md bg-teal-400 px-3 py-2 text-white" @click="() => checkUrl()">Search</button>
        </div>

        <!-- link checkers -->
        <div class="flex min-h-72 w-4/5 flex-col">
            <template v-if="(url && Object.values(linkInformation.data).length) || linkInformation.loading">
                <p class="w-full text-center text-4xl font-semibold">
                    {{ linkInformation.loading ? 'Searching...' : 'Completed' }}
                </p>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
const url = ref('')
const linkInformation = reactive({ data: {}, loading: false })

const checkUrl = async () => {
    if (!url.value) return
    linkInformation.loading = true

    try {
        const result = await $fetch('/api/linkChecker', { method: 'POST', body: { url: url.value } })

        if (result?.data) {
            linkInformation.data = result.data
        }
    } catch (err) {
        console.error(err)
    } finally {
        linkInformation.loading = false
    }
}
</script>
