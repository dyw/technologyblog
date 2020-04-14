import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fas } from '@fortawesome/free-brands-svg-icons'


import config from "../../config"

const {
    wordings = [],
    githubUsername,
    zhihuUsername,
    email,
    iconUrl,
    about,
    facebook,
  } = config

const Icon = ({ href, icon }) => (
    <a
      target="_blank"
      href={href}
      rel="external nofollow noopener noreferrer"
      className="custom-icon"
    >
      <span className="fa-layers fa-fw fa-2x">
        <FontAwesomeIcon icon={icon} />
      </span>
    </a>
  )

const Sidebar = ({ totalCount, latestPosts }) => (
    <header className="intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1">
    <div className="about-me">
      <Link to={about} href={about} className="name">
        <img className="avatar" src={iconUrl} alt="Calpa" />
        <h4>Dingyw</h4>
      </Link>
      <p className="mb-1">{wordings[0]}</p>
      <p className="mb-3">{wordings[1]}</p>
      <FontAwesomeIcon icon="zhihu" />
      <Icon
        href={`https://www.zhihu.com/people/${zhihuUsername}`}
        icon={['fab', 'zhihu']}
      />
      <Icon
        href={`https://github.com/${githubUsername}`}
        icon={['fab', 'github']}
      />
      <Icon href={`mailto:${email}`} icon={['far', 'envelope']} />
      {facebook
        && <Icon href={`https://www.facebook.com/${facebook}/`} icon={['fab', 'facebook']} />
      }
      <span>{totalCount}</span>
    </div>
  </header>
)

export default () => (
    <StaticQuery
    query={graphql`
      fragment cardData on MarkdownRemark {
        fields {
          slug
        }
        frontmatter {
          
          title
          
          date
          tags
          description
          headerImage
        }
      }
      query SidebarQuery {
        all: allMarkdownRemark {
          totalCount
        }
        limited: allMarkdownRemark(
          sort: { order: DESC, fields: frontmatter___date }
          limit: 6
        ) {
          latestPosts: edges {
            node {
              ...cardData
            }
          }
        }
      }
    `}
    render={data => <Sidebar {...data.all} {...data.limited} />}
  />
)