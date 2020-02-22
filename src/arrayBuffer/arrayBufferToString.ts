
/**
 * !! Caution: runtime will be blocked if using this for a large buffer (large file like 1GB)
 * 
 * Reference: https://stackoverflow.com/questions/9267899/arraybuffer-to-base64-encoded-string
 * @param buf 
 */
export function arrayBufferToString (buf: ArrayBuffer): string {
    let binary = ''
    const bytes = new Uint8Array(buf)
    const length = bytes.byteLength
    
    for (let i = 0; i < length; i++) {
        binary += String.fromCharCode(bytes[i])
    }

    return binary
}

export default arrayBufferToString