import React from 'react'
import BlogLayout from '../components/blogLayout'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import { Typography, IconButton, Box } from '@material-ui/core'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import styled from 'styled-components'

const BlogHTML = styled.div`

    margin-bottom: 200px;
    a {
        color:#556cd6;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;

    }
`

export default ({ data }) => {
  const pageData = data.markdownRemark
  // Its safe to use dangerouslySetInnerHTML because its from a trusted source (me) when I write HTML into my blog posts.
  return (
    <BlogLayout>
      <SEO title={pageData.frontmatter.title} />

      <Link to='/blog'>
        <Box marginLeft='-12px'>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Box>
      </Link>

      <Typography variant='h4'>{pageData.frontmatter.title}</Typography>
      <Typography variant='h6'>
        {new Date(pageData.frontmatter.date).toLocaleDateString(
          'default',
          { year: 'numeric', month: 'long', day: 'numeric' }
        )}
      </Typography>
      <BlogHTML dangerouslySetInnerHTML={{ __html: pageData.html }} />
    </BlogLayout>
  )
}

// query: given $slug, find markdownRemark where slug equals $slug, and return the html and title.
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
            }
        }
    }
`
