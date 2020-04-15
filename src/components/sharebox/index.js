import React from "react"
import ReactGA from "react-ga"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CommentButton = () => (
  <a
    className="share-button"
    style={{
        lineHeight: '1.7rem',
        color: '#337ab7',
        paddingLeft: '0.15rem',
    }}
    href="#gitalk-container"
    onClick={() =>
        ReactGA.event({
        category: 'User',
        action: 'Goto Comment Box',
        })
    }
  >
    <FontAwesomeIcon icon={['far', 'comment']} />
  </a>
)

const ShareBox = ({ url, hasCommentBox }) => (
    <div className="m-share-box">
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
      title=""
      className="share-button"
      onClick={() =>
        ReactGA.event({
          category: 'Share',
          action: 'Facebook Share',
        })
      }
    >
      <FontAwesomeIcon icon={['fab', 'facebook-f']} />
    </a>

    {hasCommentBox && <CommentButton />}

    <a
      className="share-button"
      href="#header"
      onClick={() => {
        ReactGA.event({
          category: 'User',
          action: 'Scroll to Top',
        });
      }}
      style={{
        lineHeight: '1.7rem',
        paddingLeft: '0.1rem',
      }}
    >
      <FontAwesomeIcon icon={['fas', 'chevron-up']} />
    </a>
  </div>
)

export default ShareBox