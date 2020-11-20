import React from 'react'

import { Layout, Logo, Button, SearchForm, Wrapper } from '../../Components'

import './Header.scss'

export const Header = () => {
  return (
    <div className="header">
      <Wrapper>
        <Layout columns="2">
          <Logo isHeaderLogo />
          <Button color="secondary" value="+ add move">
            + add move
          </Button>
        </Layout>
        <SearchForm />
      </Wrapper>
    </div>
  )
}
