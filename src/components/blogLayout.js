import React from 'react'
// import { Link } from 'gatsby';

import SideMenu from '../components/SideMenu'

import styles from './blogLayout.module.css'

import styled from 'styled-components'
import { Container, Box, IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { graphql, Link } from 'gatsby'

const BlogContainer = styled(Container)`
    padding-top: 100px;
`

const Layout = ({ children }) => {
  return (
    <>
      <SideMenu />
      <BlogContainer maxWidth='md'>
        <>{children}</>
      </BlogContainer>
    </>
  )
}

export default Layout
