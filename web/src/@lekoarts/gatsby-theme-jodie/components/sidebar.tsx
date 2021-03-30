/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { readableColor } from "polished"
import useSiteMetadata from "@lekoarts/gatsby-theme-jodie/src/hooks/use-site-metadata"
import Navigation from "@lekoarts/gatsby-theme-jodie/src/components/navigation";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import '../../../components/style.css';

type SidebarProps = { bg: string }

const Sidebar = ({ bg }: SidebarProps) => {
    const { siteTitle } = useSiteMetadata();

    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
            fluid(quality: 100, maxWidth: 600, maxHeight: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
      }
    }
  `)

    return (
        <header
            sx={{
                p: [3, 3, 3],
                width: (t: any): any => [`100%`, `100%`, `100%`, `100%`, '100%'],
                backgroundColor: 'black',
                position: [`relative`, `relative`, `relative`, `relative`],
                height: `100%`,
                display: `flex`,
                flexDirection: [`row`, `row`, `row`, `row`],
                alignItems: [`center`, `center`, `center`, `center`],
                justifyContent: [`space-between`, `space-between`, `space-between`, `space-between`],
                svg: {
                    fill: readableColor('black'),
                },
                variant: `sidebar`,
            }}
            data-testid="sidebar"
        >
            <Link className="sidebarLink" to="/" aria-label={`${siteTitle}, Back to Home`} sx={{ width: [`3rem`, `4rem`, `4.5rem`, `5rem`] }}>
                <Img
                    fluid={data.file.childImageSharp.fluid}
                />
            </Link>
            <div sx={{ py: 4, display: [`none`, `none`, `none`, `none`] }} />
            <Navigation bg={'black'} />
        </header>
    )
}

export default Sidebar
