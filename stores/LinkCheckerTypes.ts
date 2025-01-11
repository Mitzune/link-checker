import type { AnyObject } from '~/types/global'

export type GoogleResponse = AnyObject

export type VirusTotalResponse = {
    data: {
        attributes: {
            result: AnyObject
            stats: {
                malicious: number
                harmless: number
                suspicious: number
                undetected: number
            }
        }
    }
}
