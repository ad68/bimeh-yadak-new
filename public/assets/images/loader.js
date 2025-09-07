export default function myImageLoader({ src, width, quality }) {
  return `http://tazmin.mediatech.ir/${src}?w=${width}&q=${quality || 75}`
}