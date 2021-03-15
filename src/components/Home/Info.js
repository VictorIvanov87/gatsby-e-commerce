import React from "react"
import { Link } from "gatsby"

import Title from "../Title/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Laborum nulla minim ut excepteur quis reprehenderit exercitation.
              Sit aliquip commodo sit cillum laboris. Laboris fugiat tempor
              officia in culpa occaecat ex ex ut consequat est ullamco. Ea
              aliqua excepteur sunt sint sit qui voluptate exercitation non
              occaecat ut duis. Exercitation nulla in voluptate officia duis
              elit deserunt eiusmod laboris ipsum excepteur cillum voluptate.
              Amet culpa quis veniam irure laborum esse esse Lorem voluptate
              sunt. Culpa pariatur non laborum occaecat. Consequat consectetur
              eu sunt mollit in veniam. Nostrud sint sit consequat dolor sunt
              minim exercitation. Qui sunt amet deserunt pariatur culpa ad anim
              elit ad fugiat minim cupidatat veniam ex. Ea et ullamco Lorem
              mollit aute adipisicing sunt magna consectetur qui enim elit qui
              consequat. Esse est culpa dolor consectetur. Culpa elit
              consectetur nulla sunt laboris duis sint ea ex duis. Veniam duis
              nisi velit ad ipsum veniam dolore non qui laboris labore eiusmod
              do excepteur. Consequat exercitation eiusmod velit sint culpa
              exercitation esse consectetur aliqua ut in ut excepteur eu. Duis
              veniam excepteur amet ipsum voluptate sint do est laboris.
              Exercitation mollit eiusmod velit laborum consectetur consectetur.
              Do in mollit adipisicing occaecat anim voluptate consectetur
              occaecat incididunt dolore.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
