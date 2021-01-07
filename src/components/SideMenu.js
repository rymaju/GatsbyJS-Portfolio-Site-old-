import React, { useState } from 'react'

import {
  Typography,
  Box,
  IconButton,
  Slide,
  Fade
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const DropMenuAnchor = styled.div`
    position: fixed;
    right: 0;
    right: 0;
    z-index: 200;
`

const Ellipse = styled.div`
    position: fixed;
    width: 8px;
    height: 8px;
    left: 23px;
    top: 17px;
    z-index: 200;
`

/* Line 8 */
const Line = styled.div`
    position: fixed;
    width: 16px;
    height: 0px;
    left: 18px;
    top: 17px;
    z-index: 200;
`

/* Polygon 3 */
const Triangle = styled.div`
    position: fixed;
    width: 8px;
    height: 8px;
    left: 23px;
    top: 33px;
    z-index: 200;
`

const WhiteRect = styled.div`
    position: fixed;
    width: 110px;
    height: 226px;
    left: -100px;
    top: 55.8px;

    border: 6px solid #f8f7eb;
    box-sizing: border-box;
    transform: rotate(-40.75deg);
    z-index: -100;
`
const Arrow = styled.div`
    position: fixed;
    right: 0px;
    top: 92px;
    z-index: -100;
`

const WhiteTriangle = styled.div`
    position: fixed;
    width: 94px;
    height: 94px;
    left: -17px;
    top: 612px;
    z-index: -100;
`

const WhiteCircle = styled.div`
    position: fixed;
    right: 0px;
    bottom: 0px;
    z-index: -100;
`

const BigMenuIcon = styled(MenuIcon)`
    height: 36px;
    width: 36px;
`

const BigCloseIcon = styled(CloseIcon)`
    height: 36px;
    width: 36px;
`
const DropdownMenu = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: #333;
    z-index: 100;
`

const TopBar = styled.div`
    position: fixed;
    width: 100vw;
    height: 60px;
    background-color: #333;
    z-index: 50;
    top: 0;
    left: 0;
`

const Logo = props => {
  return (
    <div>
      <Triangle>
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 15V2.41421L13.5858 15H1Z'
            stroke={props.strokeColor}
            stroke-width='2'
          />
        </svg>
      </Triangle>

      <Ellipse>
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='8'
            cy='8'
            r='7'
            stroke={props.strokeColor}
            stroke-width='2'
          />
        </svg>
      </Ellipse>

      <Line>
        <svg
          width='3'
          height='32'
          viewBox='0 0 2 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line
            x1='1'
            x2='1'
            y2='32'
            stroke={props.strokeColor}
            stroke-width='2'
          />
        </svg>
      </Line>
    </div>
  )
}

const MenuLink = styled(AniLink)`
    color: #fff;
    text-decoration: none;
    border: none;
    box-shadow: none;
    :active {
        transition: all 200ms;
        color: #ccc;
        text-decoration: none;
    }
`

export default function SideMenu () {
  const [inMenu, setInMenu] = useState(false)

  return (
    <>
      <TopBar />

      <Logo strokeColor='#fff' />
      <WhiteRect />

      <Arrow>
        <svg
          width='52'
          height='102'
          viewBox='0 0 52 102'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12.5001 87.017C12.5094 88.3977 13.6363 89.5093 15.017 89.4999L37.5165 89.3469C38.8972 89.3375 40.0088 88.2106 39.9994 86.8299C39.99 85.4493 38.8632 84.3376 37.4825 84.347L17.4829 84.483L17.3469 64.4835C17.3375 63.1028 16.2106 61.9912 14.8299 62.0006C13.4493 62.01 12.3376 63.1368 12.347 64.5175L12.5001 87.017ZM86.2202 11.2443L13.2202 85.2443L16.7797 88.7557L89.7798 14.7557L86.2202 11.2443Z'
            fill='#F8F7EB'
          />
        </svg>
      </Arrow>

      <WhiteTriangle>
        <svg
          width='100'
          height='100'
          viewBox='0 0 100 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M-7.23909 68.5L30 4L67.2391 68.5H-7.23909Z'
            stroke='#F8F7EB'
            stroke-width='6'
          />
        </svg>
      </WhiteTriangle>

      <WhiteCircle>
        <svg
          width='120'
          height='134'
          viewBox='0 0 120 134'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='81.5'
            cy='81.5'
            r='79'
            stroke='#F8F7EB'
            stroke-width='5'
          />
        </svg>
      </WhiteCircle>
      <DropMenuAnchor>
        <IconButton onClick={() => setInMenu(!inMenu)}>
          {inMenu ? (
            <Box color='#fff'>
              <BigCloseIcon />
            </Box>
          ) : (
            <Box color='#fff'>
              <BigMenuIcon />
            </Box>
          )}
        </IconButton>
      </DropMenuAnchor>

      <Slide direction='down' in={inMenu}>
        <DropdownMenu>
          <Fade in={inMenu} timeout={1000}>
            <Box
              color='white'
              marginY={12}
              marginX={6}
              height='100%'
            >
              <Typography variant='h2'>
                <MenuLink
                  to='/'
                  activeStyle={{
                    textDecoration: 'underline'
                  }}
                  cover
                  direction='up'
                  bg='#333'
                >
                  Home
                </MenuLink>
              </Typography>

              <Typography variant='h2'>
                <MenuLink
                  to='/blog'
                  activeStyle={{
                    textDecoration: 'underline'
                  }}
                  cover
                  direction='up'
                  bg='#333'
                >
                  Blog
                </MenuLink>
              </Typography>
              <Typography variant='h2'>
                <MenuLink
                  href='./ryan_jung_resume.pdf'
                  activeStyle={{
                    textDecoration: 'underline'
                  }}
                >
                  Resume
                </MenuLink>
              </Typography>
              <Typography variant='h2'>
                <MenuLink
                  href='https://github.com/rymaju'
                  activeStyle={{
                    textDecoration: 'underline'
                  }}
                >
                  Github
                </MenuLink>
              </Typography>
            </Box>
          </Fade>
        </DropdownMenu>
      </Slide>
    </>
  )
}
