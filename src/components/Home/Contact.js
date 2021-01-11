import React from "react"
import Title from "../Title/Title"

const Contact = () => {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="col-10 col-sm-8 col-md-6 mx-auto">
        <form method="POST" action="https://formspree.io/viktorivanov87@gmail.com">
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholde="John Smith"
            />
          </div>
		  <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholde="email@email.com"
            />
          </div>
		  <div className="formGroup">
            <label htmlFor="decription">Decription</label>
            <textarea
              className="form-control"
              name="decription"
              id="decription"
              placeholde="Some text"
            ></textarea>
          </div>
		  <button type="submit" className="text-capitalize btn btn-yellow my-5">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
