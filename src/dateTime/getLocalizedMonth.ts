const getLocalizedMonth = (
    index: number = 0, 
    locale?: LocaleCode | LocaleCode[], 
    format: "long" | "short" = "long"
): string => {
    const objDate = new Date();
    objDate.setMonth(index);
  
    return objDate.toLocaleString(locale, { month: format });
}

export default getLocalizedMonth