import React from 'react'
import Figure from './figure'

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure
  }
}

export default serializers