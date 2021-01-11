import React from "react"
import Img from "gatsby-image"

const Product = node => {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={node.product.node.image.fluid} className="card-img-top" />
        <div className="card-body text-center d-flex flex-column justify-content-end">
          <h6>{node.product.node.title}</h6>
          <button
            className="snipcart-add-item btn btn-yellow mt-3 text-capitalize"
            data-item-id={node.product.node.id}
            data-item-price={node.product.node.price}
			data-item-url="/paintings/starry-night"
            data-item-image={node.product.node.src}
            data-item-name={node.product.node.title}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
