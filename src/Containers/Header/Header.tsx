import React, { useState } from 'react'

import {
  Layout,
  Logo,
  Button,
  SearchForm,
  Wrapper,
  Modal,
  ModalInput,
  ModalDatePicker,
  ModalSelect,
} from '../../Components'

import './Header.scss'

export const Header = () => {
  const [showAddMovie, setShowAddMovie] = useState(false)
  const modalToggle = () => {
    setShowAddMovie(!showAddMovie)
  }
  return (
    <div className="header">
      <Wrapper>
        <Layout columns="2">
          <Logo isHeaderLogo />
          <Button color="secondary" value="+ add move" onClick={modalToggle}>
            + add move
          </Button>
        </Layout>
        <SearchForm />
      </Wrapper>
      <Modal
        isOpen={showAddMovie}
        title="add movie"
        okBtnText="submit"
        cancelBtnText="reset"
        onOk={modalToggle}
        onCancel={modalToggle}
      >
        <ModalInput title="title" placeholder="Title here" />
        <ModalDatePicker title="release date" />
        <ModalInput title="movie url" placeholder="Movie URL here" />
        <ModalSelect />
        <ModalInput title="overview" placeholder="Overview here" />
        <ModalInput title="runtime" placeholder="Runtime here" />
      </Modal>
    </div>
  )
}
