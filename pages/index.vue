<template>
    <div class="flex min-h-[calc(100dvh-7rem)] w-full flex-col items-center justify-center gap-4">
        <div class="flex w-4/5 flex-col gap-2">
            <input
                v-model="url"
                class="rounded-md border-2 border-teal-400 bg-transparent p-2 text-teal-400"
                placeholder="Enter Link"
            />
            <button class="rounded-md bg-teal-400 px-3 py-2 text-white" @click="() => checkUrl()">Search</button>
        </div>

        <!-- link checkers -->
        <div class="flex min-h-72 w-4/5 flex-col"></div>
    </div>
</template>

<script setup lang="ts">
const url = ref('')

const checkUrl = async () => {
    if (!url.value) return
    googleApi()
}

async function googleApi() {
    const googleApi = await $fetch(
        `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${useRuntimeConfig().public.GOOGLE_API}`,
        {
            method: 'POST',
            body: {
                client: {
                    clientId: 'mitzune',
                    clientVersion: '1.0.0',
                },
                threatInfo: {
                    threatTypes: ['MALWARE', 'SOCIAL_ENGINEERING'],
                    platformTypes: ['WINDOWS'],
                    threatEntryTypes: ['URL'],
                    threatEntries: [{ url: url.value }],
                },
            },
        },
    )
    return googleApi
}

// posible links
// virustotal.com
</script>
