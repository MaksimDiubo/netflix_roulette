import React from 'react'
import { useToggle } from '../../hooks'

import {
  Layout,
  Logo,
  Button,
  SearchForm,
  Wrapper,
  AddMovieModal,
} from '../../Components'

import './Header.scss'

export const Header = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useToggle(false)

  return (
    <div className="header">
      <Wrapper>
        <Layout columns="2">
          <Logo isHeaderLogo />
          <Button
            color="secondary"
            value="+ add move"
            onClick={setIsAddModalOpen}
          >
            + add move
          </Button>
        </Layout>
        <SearchForm />
      </Wrapper>
      <AddMovieModal isOpen={isAddModalOpen} onClose={setIsAddModalOpen} />
    </div>
  )
}
