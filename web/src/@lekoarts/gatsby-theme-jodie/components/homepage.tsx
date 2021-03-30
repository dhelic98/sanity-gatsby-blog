/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { PageProps } from "gatsby"
import { ChildImageSharp } from "@lekoarts/gatsby-theme-jodie/src/types";
import modifyGrid from "@lekoarts/gatsby-theme-jodie/src/utils/modify-grid";
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout";
import { visuallyHidden } from "@lekoarts/gatsby-theme-jodie/src/styles/utils";
import locales from '@lekoarts/gatsby-theme-jodie/src/locales';
import Instagram from '../../../components/instagram';
import Twitter from "../../../components/twitter";
import Pocket from "../../../components/pocket";
import WritingLite from "../../../components/writingLite";

type DataProps = {
    projects: {
        nodes: {
            slug: string
            title: string
            cover: ChildImageSharp
            __typename: "MdxProject"
        }[]
    }
    pages: {
        nodes: {
            slug: string
            title: string
            cover: ChildImageSharp
            __typename: "MdxPage"
        }[]
    }
}

const HomepageExtended: React.FC<PageProps<DataProps>> = ({ data: { pages, projects }, location }) => {
    const rawItems = [...pages.nodes, ...projects.nodes]
    const items = modifyGrid(rawItems)
    const itemsCount = items.length
    let divisor = 9

    for (let i = 0; i < itemsCount; i++) {
        const quotient = itemsCount % divisor
        const quotientAlt = (itemsCount - 1) % divisor

        if (quotient === 0 || quotientAlt === 0) {
            break
        }

        divisor -= 1
    }

    return (
        <Layout>
            <h1 sx={visuallyHidden} data-testid="page-title">
                {locales.home}
            </h1>
            <div className="hero-div">
                <h2 className="hero-title">INSTAGRAM.</h2>
                <Instagram />
            </div>
            <div className="content-div">
                <div className="hero-div">
                    <h2 className="hero-title">Writing.</h2>
                    <WritingLite />
                </div>
                <div className="hero-div">
                    <h2 className="hero-title">Reading.</h2>
                    <Pocket />
                </div>
                <div className="hero-div">
                    <h2 className="hero-title">Tweets.</h2>
                    <Twitter />
                </div>
            </div>
        </Layout>
    )
}

export default HomepageExtended
