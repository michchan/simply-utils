
const formatCvc = (value: CreditCardCVC): string => {
    if (value.length > 3) {
        return value.substr(0, 3)
    }
    return value
}

export default formatCvc