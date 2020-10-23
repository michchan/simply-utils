/**
 * Calculate upload timeout based on file size
 *
 * @param size - The file size in bytes
 * @returns The timeout in milliseconds (ms).
 */
const calculateUploadTimeout = (size: number, min: number = 60000, factor: number = 10): number =>
  // 1s/10kB
  // This calculation is based on a network of minimum 1Mbps bandwidth
  Math.max(size / factor, min)

export default calculateUploadTimeout