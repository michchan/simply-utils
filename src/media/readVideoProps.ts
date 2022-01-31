import isStr from '../string/isStr'
/**
 * Read the file props of the video
 * @category media
 * @module readVideoProps
 */
const readVideoProps = (src: HTMLVideoElement['src'] | File | Blob): Promise<{
  width: number;
  height: number;
}> => new Promise((resolve, reject) => {
  const video: HTMLVideoElement = document.createElement('video')

  video.onloadedmetadata = () => resolve({
    width: video.videoWidth,
    height: video.videoHeight,
  })
  video.onerror = reject
  video.src = isStr(src) ? src : window.URL.createObjectURL(src)
})

export default readVideoProps