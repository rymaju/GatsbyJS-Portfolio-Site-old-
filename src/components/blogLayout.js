import React from 'react'

import SideMenu from '../components/SideMenu'

import styled from 'styled-components'
import { Container } from '@material-ui/core'

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
