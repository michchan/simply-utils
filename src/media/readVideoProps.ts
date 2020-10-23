import isStr from '../string/isStr'

/**
 * Read the file props of the video
 */
const readVideoProps = (src: HTMLVideoElement['src'] | File | Blob): Promise<{
  width: number;
  height: number;
}> => new Promise((resolve, reject) => {
  const video: HTMLVideoElement = document.createElement('video')

  video.onloadedmetadata = function () {
    resolve({
      // @ts-ignore: @TODO: fix type
      width: this.videoWidth,
      // @ts-ignore: @TODO: fix type
      height: this.videoHeight,
    })
  }

  video.onerror = function (e: Event | string) {
    reject(e)
  }

  video.src = isStr(src) ? src : window.URL.createObjectURL(src)
})

export default readVideoProps