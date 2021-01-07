import React, { useState, useEffect } from "react"
import Title from "../Title/Title"
import Img from "gatsby-image"

const Menu = ({ items }) => {
  const [allItems, setAllItems] = useState(items.edges)
  const [itemsToRender, setItemsToRender] = useState(items.edges)
  const [categories, setCategories] = useState([])

  const getAllCategories = () => {
    const tempItems = allItems.map(item => item.node.category)
    const tempCategories = new Set(tempItems)
    let filteredCategories = Array.from(tempCategories)
    filteredCategories = ["all", ...tempCategories]

    return filteredCategories
  }

  useEffect(() => {
    setCategories(getAllCategories())
  }, [])

  const handleItems = category => {
    let tempItems = allItems

    if (category === "all") {
      setItemsToRender(tempItems)
    } else {
      tempItems = allItems.filter(item => item.node.category === category)
      setItemsToRender(tempItems)
    }
  }

  if (allItems.length > 0) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu"></Title>
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {categories.map((category, i) => {
                return (
                  <button
                    type="btn"
                    key={i}
                    className="btn btn-yellow text-capitalize m-3"
                    onClick={() => handleItems(category)}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="row">
            {itemsToRender.map(({ node }) => {
              return (
                <div className="col-12 col-md-6 my-3 d-flex" key={node.id}>
                  <div>
                    <Img fixed={node.image.fixed} />
                  </div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0 text-capitalize">{node.title}</h6>
                      <h6 className="mb-0 text-warning">${node.price}</h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of out menu"></Title>
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              there are no items to display
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu
