import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { Typography, Box, Button, Grid, Container, Fade, IconButton, Link } from '@material-ui/core'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const LandingButton = styled(Button)`
    //text-transform: none;
    border-radius: 0;
    width: 150px;
`
const LandingFlex = styled.div`
    display: flex;
    align-items:center;
    height:100vh;
`
const LandingContainer = styled.div`
    display: block;
`

class Landing extends React.Component {
  render () {
    return (
      <Container maxWidth='lg' fluid>
        <LandingFlex>
          <LandingContainer>

            <Box marginBottom={3}>
              <Fade in timeout={1000}>
                <Typography variant='h1'>
                  <Box fontWeight='700'>
                    Hi I'm Ryan.
                  </Box>
                </Typography>
              </Fade>
              <Fade in timeout={1500}>
                <Typography variant='h4'>
                  I study Computer Science and Design at Northeastern University.
                </Typography>
              </Fade>

            </Box>
            <Fade in timeout={2000}>
              <Typography variant='h5' gutterBottom>
                I'm experienced creating both full stack web applications and low-level programs.
              </Typography>
            </Fade>

            <Fade in timeout={2000}>
              <Typography variant='h5'>
                My passion is developing reliable accessible software made with <b>love</b>.
              </Typography>
            </Fade>

            <Fade in timeout={2500}>

              <Box marginTop={4}>
                <Grid container spacing={1}>
                  <Grid item>
                    <LandingButton variant='outlined' disableElevation size='large' onClick={() => scrollTo('#projects')}>
                      <Typography>
                        Projects
                      </Typography>
                    </LandingButton>
                  </Grid>
                  <Grid item>

                    <LandingButton variant='outlined' disableElevation size='large' onClick={() => scrollTo('#contact')}>
                      <Typography>
                        Contact
                      </Typography>
                    </LandingButton>
                  </Grid>

                  <Grid item>

                    <LandingButton variant='outlined' disableElevation size='large' component={AniLink} cover direction='right' bg='#333' to='/blog'>
                      <Typography>
                        Blog
                      </Typography>
                    </LandingButton>
                  </Grid>

                  <Grid item>

                    <LandingButton variant='outlined' disableElevation size='large' href='./ryan_jung_resume.pdf'>
                      <Typography>
                        Resume
                      </Typography>
                    </LandingButton>
                  </Grid>
                </Grid>
                <Box marginTop={2}>
                  <Grid container spacing={1}>
                    <Grid item>
                      <IconButton component={Link} href='https://github.com/rymaju'>
                        <svg id='Bold' enable-background='new 0 0 24 24' height='32' viewBox='0 0 24 24' width='32' xmlns='http://www.w3.org/2000/svg'><path d='m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z' /></svg>

                      </IconButton>
                      <IconButton component={Link} href='https://www.linkedin.com/in/ryanmjung/'>

                        <svg id='Bold' enable-background='new 0 0 24 24' height='32' viewBox='0 0 24 24' width='32' xmlns='http://www.w3.org/2000/svg'><path d='m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z' /><path d='m.396 7.977h4.976v16.023h-4.976z' /><path d='m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z' /></svg>
                      </IconButton>

                    </Grid>

                  </Grid>
                </Box>
              </Box>
            </Fade>

          </LandingContainer>
        </LandingFlex>
      </Container>
    )
  }
}

export default Landing
