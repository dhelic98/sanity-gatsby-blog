exports.createResolvers = ({
  createResolvers
}) => {
  const resolvers = {
    SanityCategory: {
      posts: {
        type: ['SanityPost'],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            type: 'SanityPost',
            query: {
              filter: {
                categories: {
                  elemMatch: {
                    _id: {
                      eq: source._id
                    }
                  }
                }
              }
            }
          })
        }
      }
    }
  }
  createResolvers(resolvers)
}

const {
  isFuture,
  parseISO
} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const {
  format
} = require('date-fns')

async function createBlogPostPages(graphql, actions) {
  const {
    createPage
  } = actions
  const result = await graphql(`
  {
    allSanityPost{
      edges {
        node {
          id
          publishedAt
          slug {
            current
          }
        }
      }
    }
  }
`)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges
    .filter(edge => !isFuture(parseISO(edge.node.publishedAt)))
    .forEach((edge, index) => {
      const {
        id,
        slug = {},
        publishedAt
      } = edge.node
      const dateSegment = format(parseISO(edge.node.publishedAt), 'yyyy/mm')
      const path = `/blog/${dateSegment}/${slug.current}/`

      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.jsx'),
        context: {
          id
        }
      })
    })
}

exports.createPages = async ({
  graphql,
  actions
}) => {
  await createBlogPostPages(graphql, actions)
}
