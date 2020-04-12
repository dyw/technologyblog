import React from "react"
import { 
    TransitionGroup,
    Transition as ReactTransition
 } from "react-transition-group"

class Transition extends React.PureComponent {
    render() {
        const { children, location } = this.props
        return (
          <TransitionGroup>
            <ReactTransition
              key={location.pathname}
            >
                {status => (
                    <div>{children}</div>
                )}
            </ReactTransition>
          </TransitionGroup>
        )
    }    
}

export default Transition