import { useStaticQuery, graphql } from "gatsby"

const usePocket = () => {
  const data = useStaticQuery(graphql`
  {
    allPocketArticle(sort: {fields: readWeek}, limit: 16) {
      edges {
        node {
          id
          url
          title
          favourite
          excerpt
          is_article
          is_index
          has_video
          has_image
          word_count
          time_read
          readDay
          readWeek
          articleDomain
          domainFavicon
          image {
            item_id
            src
            width
            height
          }
        }
      }
    }
  }
  `);
  return data.allPocketArticle.edges;
}

export default usePocket;