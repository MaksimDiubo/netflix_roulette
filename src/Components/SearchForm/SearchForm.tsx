import React from 'react'

import { Button } from '../Button'

import './SearchForm.scss'

export const SearchForm: React.FC = (props) => {
  return (
    <form className="search-form" action="#" method="get">
      <label className="search-form__label" htmlFor="search">
        find your movie
      </label>
      <input
        className="search-form__input"
        type="text"
        name="search"
        id="search"
        autoComplete="off"
        placeholder="What do you want to watch?"
      />
      <Button type="submit" size="l">
        search
      </Button>
    </form>
  )
}
