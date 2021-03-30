import {
  useStaticQuery,
  graphql
} from "gatsby"

const useSanity = () => {
  const data = useStaticQuery(graphql `
  {
    allSanityCategory {
      edges {
        node {
          id
          title
          posts {
            id
            body {
              _key
              _type
              style
              list
              _rawChildren
            }
            views
            title
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
    allSanityPost {
      nodes {
        id
        body {
          _key
          _rawChildren
          _type
          list
          style
        }
        title
        views
        slug {
          current
        }
        publishedAt
      }
    }
  }
    
    `);

  return {
    categories: data.allSanityCategory.edges,
    posts: data.allSanityPost.nodes
  };

}

export default useSanity;