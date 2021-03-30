import clientConfig from '../../client-config'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(clientConfig)

export function imageUrlFor (source) {
  return builder.image(source)
}