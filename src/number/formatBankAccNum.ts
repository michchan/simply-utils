// make number in format XXX-XXXXXX-XXX
const formatBankAccNum = (value: BankAccountNumber, separator: string = '-'): string => {
    const rawNumber = value.replace(/[^\d]/g, '')
    const matchedNumber = rawNumber.match(/^(\d{0,3})(\d{0,6})(\d{0,3})/)
    // matchedNumber will be in format of [ wholeNumber, firstGroup, secondGroup, thirdGroup ]
    if (matchedNumber) {
        // drop the first segment (wholeNumber), and remove empty segment
        const activeSegments = matchedNumber.slice(1).filter(s => s !== '')
        return activeSegments.join(separator)
    } else {
        return ''
    }
}

export default formatBankAccNum