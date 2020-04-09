import React from "react"

const Content = ( props ) => {
    const { post } = this.props
    return (
        <div dangerouslySetInnerHTML={{ __html: post}}></div>
    )
}

export default Content