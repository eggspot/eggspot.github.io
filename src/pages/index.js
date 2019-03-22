import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Header from '../components/Header'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    const ItemWrapper = styled.div`
      display: flex;
    `

    const Item = styled.div`
      width: 25%;
      padding: 15px;
    `

    return (
      <React.Fragment>
        <Header siteTitle="We are Eggspot" />
        <Layout location={this.props.location} title={siteTitle}>
          <ItemWrapper>
            <Item>
              <h3>Email Template</h3>
              <p>Professionalize emails that you use to communicate with customers.</p>
            </Item>
            <Item>
              <h3>Email Template</h3>
              <p>Professionalize emails that you use to communicate with customers.</p>
            </Item>
            <Item>
              <h3>Email Template</h3>
              <p>Professionalize emails that you use to communicate with customers.</p>
            </Item>
            <Item>
              <h3>Email Template</h3>
              <p>Professionalize emails that you use to communicate with customers.</p>
            </Item>
          </ItemWrapper>
          <SEO
            title="All posts"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <Bio />
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
        </Layout>
      </React.Fragment>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
