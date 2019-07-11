import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer
    style={{
      background: `rebeccapurple`,
      marginTop: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h4 style={{ margin: 0, color: `white`}}>
        Made by Ryan Jung, a computer science student at Northeastern University.
      </h4>
    </div>
  </footer>
)


export default Footer
