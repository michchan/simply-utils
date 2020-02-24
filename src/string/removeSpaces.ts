


function removeSpaces <T extends string = string> (s: T): T {
    return s.replace(/\s/g, '') as T
}

export default removeSpaces