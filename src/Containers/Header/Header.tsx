import React from 'react'

import { Layout, Logo, Button, SearchForm } from '../../Components'

import './Header.scss'

export const Header = () => {
  return (
    <div className="header">
      <Layout>
        <Logo />
        <Button color="secondary" value="+ add move">
          + add move
        </Button>
      </Layout>
      <SearchForm />
    </div>
  )
}
