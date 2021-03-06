export default {
  name: 'guestPost',
  type: 'document',
  title: 'Guest Post',
  fields: [{
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    },
  ]
}
