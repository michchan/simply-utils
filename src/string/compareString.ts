
const compareString = (a: string, b: string, descending: boolean = false): number => {
    if (a < b) return descending? 1 : -1
    if (a > b) return descending? -1 : 1
    return 0
}

export default compareString