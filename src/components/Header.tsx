import React from 'react'
import styled from '@emotion/styled'

import MainNav from '@components/MainNav'
import Contact_Mini from '@components/Contact_Mini'
import '@styles/colours.css'

const HeaderWrapper = styled.header`
  display: flex;
  position: fixed;
  width: calc(100% - 4rem);
  margin: 0 2rem;
  padding: 2rem;
  align-items: center;
  border-bottom: solid 2px var(--main-accent-color);
  padding-bottom: 1rem;
  background-color: var(--main-bg-color);
  z-index: 10;
`

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <MainNav />
      <Contact_Mini />
    </HeaderWrapper>
  )
}

export default Header
