import React from "react"

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto text-white text-center text-capitalized">
            <h3>all rights &copy;{new Date().getFullYear()}</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
