import React from "react"
import { 
    TransitionGroup,
    Transition as ReactTransition
 } from "react-transition-group"

 import config from "../../config"

 const { transitionDelay = 100 } = config

 const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `opacity ${transitionDelay}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `all ${transitionDelay}ms ease-in-out`,
    opacity: 0,
  },
}

class Transition extends React.PureComponent {
    render() {
        const { children, location } = this.props
        return (
          <TransitionGroup>
            <ReactTransition
              key={location.pathname}
              timeout={
                { enter: transitionDelay, exit: transitionDelay }
              }
            >
                {status => (
                    <div style={{ ...getTransitionStyles[status] }}>{children}</div>
                )}
            </ReactTransition>
          </TransitionGroup>
        )
    }    
}

export default Transition