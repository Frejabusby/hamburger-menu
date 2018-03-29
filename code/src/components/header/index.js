import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <header>
        <Grid className="header-grid">
          <label htmlFor="hamburger" className="hamburger-label">
            <span />
            <span />
            <span />
          </label>

          <input id="hamburger" type="checkbox" className="hamburger-checkbox" />

          <nav className="menu">
            <ul>
              <li><a href="http://technigo.io">Technigo</a></li>
              <li><a href="http://technigo.io">Boot Camp</a></li>
              <li><a href="http://technigo.io">Stories</a></li>
              <li><a href="http://technigo.io">About</a></li>
            </ul>
          </nav>
        </Grid>
      </header>
    )
  }

}

export default Header
