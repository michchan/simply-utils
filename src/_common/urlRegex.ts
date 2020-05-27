// Reference: https://regex101.com/r/fics9a/3
// Special character: [A-Za-z0-9_\.\/\-~\?=&]

const STRICT = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[A-Za-z0-9_\.\/\-~\?=&]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[A-Za-z0-9_\.\/\-~\?=&]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[A-Za-z0-9_\.\/\-~\?=&]{2,}|www\.[a-zA-Z0-9]+\.[A-Za-z0-9_\.\/\-~\?=&]{2,})$/

const STRICT_GLOBAL = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[A-Za-z0-9_\.\/\-~\?=&]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[A-Za-z0-9_\.\/\-~\?=&]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[A-Za-z0-9_\.\/\-~\?=&]{2,}|www\.[a-zA-Z0-9]+\.[A-Za-z0-9_\.\/\-~\?=&]{2,})/g

// * Can be without protocol (http/https) or cname (www)
const OPTIONAL_WWW = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[A-Za-z0-9_\.\/\-~\?=&]{2,}|www\.?[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[A-Za-z0-9_\.\/\-~\?=&]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[A-Za-z0-9_\.\/\-~\?=&]{2,}|(www\.)[a-zA-Z0-9]+\.[^\s\W]{2,}|(?!www)([a-zA-Z0-9]+)\.[^\s\W]{2,})$/

const OPTIONAL_WWW_GLOBAL = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[A-Za-z0-9_\.\/\-~\?=&]{2,}|www\.?[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[A-Za-z0-9_\.\/\-~\?=&]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[A-Za-z0-9_\.\/\-~\?=&]{2,}|(www\.)[a-zA-Z0-9]+\.[^\s\W]{2,}|(?!www)([a-zA-Z0-9]+)\.[^\s\W]{2,})/g


const urlRegex = {
    STRICT,
    STRICT_GLOBAL,
    OPTIONAL_WWW,
    OPTIONAL_WWW_GLOBAL,
} as const 

export default urlRegex
