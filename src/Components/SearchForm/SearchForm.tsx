import React from 'react'

import { Button } from '../Button'

import './SearchForm.scss'

export const SearchForm: React.FC = (props) => {
  const inputId = 'search'
  return (
    <form className="search-form" method="get">
      <label className="search-form__label" htmlFor={inputId}>
        find your movie
      </label>
      <input
        className="search-form__input"
        type="text"
        name="search"
        id={inputId}
        autoComplete="off"
        placeholder="What do you want to watch?"
      />
      <Button type="submit" size="l">
        search
      </Button>
    </form>
  )
}
