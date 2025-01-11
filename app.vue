<template>
    <NuxtLayout>
        <Toaster />
        <NuxtPage />
    </NuxtLayout>
</template>

<script lang="ts" setup>
const theme = computed(() => (useTheme().theme === 'dark' ? 'dark' : 'light'))
useHead({
    title: 'Check my link ph',
    meta: [
        {
            name: 'description',
            content:
                'Free tool to check, validate and verify your links. Instantly detect broken links, redirects, and analyze link health for better website maintenance.',
        },
        {
            name: 'keywords',
            content:
                'link checker, URL validator, broken link detector, website maintenance, SEO tools, link verification',
        },
        {
            property: 'og:title',
            content: 'Link Checker PH - Verify Your Links Instantly',
        },
        {
            property: 'og:description',
            content:
                'Free tool to check, validate and verify your links. Instantly detect broken links, redirects, and analyze link health.',
        },
        {
            name: 'robots',
            content: 'index, follow',
        },
    ],
    bodyAttrs: { class: [theme], id: 'app' },
})
</script>
