import type { AnyObject } from '~/types/global'
import { reactive } from 'vue'

export default defineEventHandler(async (event) => {
    const { url } = await readBody(event)

    const linkData = reactive({
        googleApi: {},
        virusTotalApi: {},
    })

    linkData.googleApi = await fetchGoogle(url)
    linkData.virusTotalApi = await fetchVirusTotal(url)

    return { data: linkData }
})

async function fetchGoogle(url: string): Promise<AnyObject> {
    return await $fetch(
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
                    threatEntries: [{ url }],
                },
            },
        },
    )
}

async function fetchVirusTotal(url: string): Promise<AnyObject> {
    const virusTotal = await $fetch<AnyObject>('https://www.virustotal.com/api/v3/urls', {
        method: 'POST',
        body: new URLSearchParams({ url }),
        headers: { 'x-apikey': useRuntimeConfig().public.VIRUS_TOTAL_API },
    })

    if (virusTotal?.data) {
        return await $fetch(`https://www.virustotal.com/api/v3/analyses/${virusTotal.data.id}`, {
            method: 'GET',
            headers: { 'x-apikey': useRuntimeConfig().public.VIRUS_TOTAL_API },
        })
    }

    return {}
}
