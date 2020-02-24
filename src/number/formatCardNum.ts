import formatAsGroupedString from "./formatAsGroupedString"


const formatCardNum = (value: CreditCardNumber, separator: string = ' '): string => formatAsGroupedString(value, 4, 4, separator)

export default formatCardNum