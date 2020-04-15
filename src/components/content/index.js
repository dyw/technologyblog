import React, { Component } from "react"
import lozad from "lozad"

import { isBrowser } from "../../utils"

class Content extends Component {
  constructor(props) {
    super(props)
    const { post } = this.props
    this.post = post
  }

  componentDidMount() {
    if (isBrowser()) {
      const observer = lozad('.lozad', {
        load(el) {
          el.src = el.dataset.src
          el.onload = () => {
            el.classList.add('animated')
            el.classList.add('fadeIn')
          }
        }
      })
      observer.observe()
    }
  }

  render() {
    const { post } = this.props
    return (
      <div
      dangerouslySetInnerHTML={{ __html: post}}
      style={{
        padding: 30,
        background: 'white'
      }}
      >
      </div>
    )
  }
}

export default Content