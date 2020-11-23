import React from 'react'
import styles from './contact.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Box, Container, Grid, Link, Typography } from '@material-ui/core'
import Fade from 'react-reveal/Fade'

const UnderlayBox = styled.div`
    border: 4px solid white;
    width: 220px;
    height: 220px;
    position: relative;
`

const ImageContainer = styled.div`
    width: 220px;
    transform: translate(10px, -20px);
`

const ContactContainer = styled.div`
    min-height: 65vh;
    max-width: 900px;
    margin: auto;
    text-align: left;
    margin-top: 50px;
`

const Contact = () => {
  const data = useStaticQuery(graphql`
        query {
            profilePicture: file(relativePath: { eq: "ryan_hamsom.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
  return (
    <Container id='contact'>
      <Box paddingTop={10} />
      <Fade>
        <Typography variant='h1'>
          <Box fontWeight={700}>Say hi!</Box>
        </Typography>
      </Fade>

      <ContactContainer>
        <Grid container spacing={4} alignItems='center'>
          <Grid item>
            <Fade>
              <Box margin={4}>
                <UnderlayBox>
                  <ImageContainer>
                    <Img
                      fluid={
                                                data.profilePicture
                                                  .childImageSharp.fluid
                                            }
                    />
                  </ImageContainer>
                </UnderlayBox>
              </Box>
            </Fade>
          </Grid>
          <Grid item>
            <Fade>
              <Typography variant='body1' gutterBottom>
                Email me at{' '}
                <Link
                  href='mailto: ryan.matthew.jung@gmail.com'
                >
                  ryan.matthew.jung@gmail.com
                </Link>
              </Typography>

              <Typography variant='body1' gutterBottom>
                I don't bite, I swear.{' '}
              </Typography>

              <Typography variant='body1' gutterBottom>
                Oh, and check out all my projects on{' '}
                <Link href='https://github.com/rymaju'>
                  Github
                </Link>
                !
              </Typography>
            </Fade>
          </Grid>
        </Grid>
      </ContactContainer>
    </Container>
  )
}

export default Contact
