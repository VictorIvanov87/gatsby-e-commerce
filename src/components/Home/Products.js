import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Product from "./Product"
import Title from "../Title/Title"

const Products = () => {
  const getProducts = graphql`
    {
      products: allContentfulCoffeeProduct {
        edges {
          node {
            id
			title
			price
            image {
              fluid(maxHeight: 426) {
                src
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `

  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="our products" />
              <div className="row">
                {data.products.edges.map(product => {
                  return <Product key={product.node.id} product={product} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}

export default Products
