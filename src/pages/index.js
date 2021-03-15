import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/BackgroundSection/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Products from "../components/Home/Products"
import Contact from "../components/Home/Contact"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      title="Joe's Coffee Shop"
      styleClass="default-background"
      img={data.img.childImageSharp.fluid}
    ></BackgroundSection>
    <Info></Info>
    <Menu items={data.menu}></Menu>
    <Products />
	<Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeItem {
      edges {
        node {
          id
          title
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed
            }
          }
          price
          description {
            description
          }
          category
        }
      }
    }
  }
`

export default IndexPage
