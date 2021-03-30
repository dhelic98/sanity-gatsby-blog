import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import BlogPost from '../components/blog-post'
import SEO from '../components/seo'
import { toPlainText } from '../lib/helpers'
import Axios from "axios"
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout";

export const query = graphql`
   fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      _id
      id
      publishedAt
      mainImage {
        ...SanityImage
        alt
      }
      categories {
        id
        _id
        title
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`
/*

*/

const BlogPostTemplate = props => {
  useEffect(() => {

    const fetchData = async () => {
      const token = 'skZtaEqHcHgqtKHCuoQbyo2BgZNrom5iFPlKnkM24rJtgTchspLwEBxwtto22sHDXEn2v7RnanGZxeCItZHsxEOV11AYRm5d0AhI9Vo81rotK2Xdphm3vI9cEn3HbIaoTf8CkXOxQIwFXdHyPYfQQdAVIKk5f77sUDBn6uCEbCFFzJY625wH'
      await Axios({
        method: 'post',
        url: 'https://eepwv2ou.api.sanity.io/v1/data/mutate/production',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        data: {
          "mutations": [
            {
              "patch": {
                "id": props.data.post._id,
                "inc": {
                  "views": 1
                }
              }
            }
          ]
        }
      });
    }

    fetchData();
  }, [])
  const { data, errors } = props
  const post = data && data.post
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {post && <SEO title={post.title || 'Untitled'} description={toPlainText(post._rawExcerpt)} image={post.mainImage} />}
      {post && <BlogPost {...post} />}
    </Layout>
  )
}

export default BlogPostTemplate