import { useStaticQuery, graphql } from "gatsby"

const useTwitter = () => {
    const data = useStaticQuery(graphql`
    query {
        allTwitterStatusesUserTimelineGetTweets(limit: 8) {
          edges {
            node {
              id
              full_text
              id_str
              created_at
            }
          }
        }
      }
      
  `)

    return data.allTwitterStatusesUserTimelineGetTweets.edges;
}

export default useTwitter;
