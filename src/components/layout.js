import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import SideNavBar from './sidebar'
import {
  mainSection,
  container,
  heading,
  siteTitle,
  navLinks,
  navLinkItem
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <div>
      <section className={mainSection}>
        <div className={container}>
          <title>{pageTitle} | {data.site.siteMetadata.title}</title>
          <header className={siteTitle}>{data.site.siteMetadata.title}</header>
          <nav>
            <ul className={navLinks}>
              {data.site.siteMetadata.menuLinks.map((link, i) => (
                <li className={navLinkItem} >
                  <Link to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <main>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
          </main>
        </div>
      </section>
    </div>
  )
}

export default Layout
