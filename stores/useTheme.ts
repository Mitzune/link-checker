export const useTheme = defineStore('theme', {
    state: () => ({
        theme: 'dark',
    }),

    actions: {
        toggleTheme() {
            this.theme = this.theme === 'dark' ? 'light' : 'dark'
        },
    },
})
