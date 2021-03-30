/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { readableColor } from "polished"
import useSiteMetadata from "@lekoarts/gatsby-theme-jodie/src/hooks/use-site-metadata"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCanadianMapleLeaf, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "gatsby";



const Footer = ({ bg }: { bg: string }) => {
  const { siteTitle } = useSiteMetadata()
  const { theme } = useThemeUI()

  const text = readableColor(
    bg,
    theme!.colors!.textMuted as string | undefined,
    theme!.colors!.textMutedLight as string | undefined
  )

  return (
    <footer
      sx={{
        position: [`relative`, `relative`, `relative`, `relative`],
        width: (t: any): any => [`100%`, `100%`, `100%`, '100%', '100%'],
        bottom: 0,
        color: 'white',
        fontSize: 0,
        p: [3, 3, 4],
        background: 'black',
        a: {
          color: readableColor('black'),
          "&:hover,&:focus": {
            color: readableColor('black', `primary`, `primaryLight`, false),
          },
        },
        variant: `footer`,
      }}
    >
      <div>
        <a>
          <FontAwesomeIcon className="micon" icon={faTwitter} />
        </a>
        <a href="">
          <FontAwesomeIcon className="micon" icon={faFacebook} />
        </a>
        <a href="">
          <FontAwesomeIcon className="micon" icon={faInstagram} />
        </a>
      </div>
      <div>
        <p>Made with <span><FontAwesomeIcon className="redIcon" icon={faHeart} /></span> from <span><FontAwesomeIcon icon={faCanadianMapleLeaf} className="redIcon" /></span>. © 2021</p>
      </div>
      <div>
        <Link className="footerLink" to="/terms">Terms of use</Link>|
        <Link className="footerLink" to="/privacy">Privacy</Link>|
        <Link className="footerLink" to="/disclaimer">Disclaimer</Link>
      </div>
    </footer>
  )
}

export default Footer
