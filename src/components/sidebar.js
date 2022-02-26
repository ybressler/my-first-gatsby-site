import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  sidebar,
  sidebarNavLinks
} from './layout.module.css'

const SideNavBar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <div className={sidebar}>
      <nav>
        <ul className={sidebarNavLinks}>
          {data.site.siteMetadata.menuLinks.map((link, i) => (
            <li>
              <Link to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default SideNavBar
