import {
  useStaticQuery,
  graphql
} from "gatsby"

const useSanityLinks = () => {
  const data = useStaticQuery(graphql `
    {
        allSanityGuestPost {
            edges {
              node {
                link
                title
                id
                body {
                  children {
                    text
                  }
                  list
                  style
                  _rawChildren
                }
              }
            }
          }
    }
      `);

  return data.allSanityGuestPost.edges;

}

export default useSanityLinks;