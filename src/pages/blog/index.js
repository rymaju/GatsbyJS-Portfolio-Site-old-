import React from 'react'
import BlogLayout from '../../components/blogLayout'
import { graphql, Link } from 'gatsby'
import SEO from '../../components/seo'
import { IconButton, Box, Link as MUILink, Typography, Fade } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
// Blog index page that will display my blog posts sorted by date
// you will be able to click on the posts and read them too!

const BlogTeaser = styled.div`
    margin-bottom: 12px;
`

const BlogIndex = ({ data }) => {
  return (
    <BlogLayout>

      <SEO
        title="Ryan Jung's Blog"
        description='A blog about my computer science projects and education.'
      />
      <AniLink to='/' cover direction='left' bg='#333'>
        <Box marginLeft='-12px'>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Box>
      </AniLink>
      <Typography variant='subtitle1'>{data.allMarkdownRemark.totalCount} Posts</Typography>
      {data.allMarkdownRemark.edges.map(({ node }, i) => (
        <Fade in timeout={500+i*500}>
        <BlogTeaser key={node.id}>
          <Link to={node.fields.slug}>
            <MUILink>
              <Typography variant='h5'>{node.frontmatter.title}</Typography>
            </MUILink>
          </Link>
          <Typography variant='body2'>{node.excerpt.slice(0, 250)}</Typography>
        </BlogTeaser>
        </Fade>
      ))}
    </BlogLayout>
  )
}

export default BlogIndex

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`
