export default function useCount() {
    const counterStore = useCounterStore()

    const addCountCustom = (val: number) => {
        counterStore.count += val
    }

    return {
        addCountCustom,
    }
}
