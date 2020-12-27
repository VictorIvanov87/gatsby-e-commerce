import React, { useState } from "react"
import Title from "../Title/Title"
import Img from "gatsby-image"

const Menu = ({ items }) => {
  const [allItems, setAllItems] = useState(items.edges)
  const [coffeeItems, setCoffeeItems] = useState(items.edges)
  console.log(allItems)
  if (allItems.length > 0) {
    return <div>asd</div>
  } else {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of out menu"></Title>
          <div className="row">
            <div className="col-10 col-sm-6">qwe</div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu
