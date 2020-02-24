import isStr from "../string/isStr"


/**
 * Read the file props of the image
 */
const readImageProps = (src: HTMLImageElement['src'] | File | Blob): Promise<{
    width: number;
    height: number;
}> => new Promise((resolve, reject) => {
    const img: HTMLImageElement = new Image()

    img.onload = function() {
        resolve({
            // @ts-ignore: @TODO: fix type
            width: this.width,
            // @ts-ignore: @TODO: fix type
            height: this.height,
        })
    }

    img.onerror = function(e: Event | string) {
        reject(e)
    }

    img.src = isStr(src)? src : window.URL.createObjectURL(src)
})

export default readImageProps