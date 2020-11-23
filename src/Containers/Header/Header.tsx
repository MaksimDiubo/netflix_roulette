import React, { useState } from 'react'

import {
  Layout,
  Logo,
  Button,
  SearchForm,
  Wrapper,
  AddMovieModal,
} from '../../Components'

import { visibilityToggle } from '../../utils/utils'

import './Header.scss'

export const Header = () => {
  const [showAddMovie, setShowAddMovie] = useState(false)

  return (
    <div className="header">
      <Wrapper>
        <Layout columns="2">
          <Logo isHeaderLogo />
          <Button
            color="secondary"
            value="+ add move"
            onClick={() => visibilityToggle(showAddMovie, setShowAddMovie)}
          >
            + add move
          </Button>
        </Layout>
        <SearchForm />
      </Wrapper>
      <AddMovieModal
        isOpen={showAddMovie}
        visibilityToggle={() => visibilityToggle(showAddMovie, setShowAddMovie)}
      />
    </div>
  )
}
