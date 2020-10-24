import isStr from '../string/isStr'

/**
 * Read the file props of the image
 */
const readImageProps = (src: HTMLImageElement['src'] | File | Blob): Promise<{
  width: number;
  height: number;
}> => new Promise((resolve, reject) => {
  const img: HTMLImageElement = new Image()

  img.onload = () => resolve({
    width: img.width,
    height: img.height,
  })
  img.onerror = reject
  img.src = isStr(src) ? src : window.URL.createObjectURL(src)
})

export default readImageProps