import React, { useState, FormEvent, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../../Containers/Main/moviesSlice'

import { Button } from '../Button'

import './SearchForm.scss'

export const SearchForm: React.FC = () => {
  const [value, setValue] = useState<string | null>(null)
  const dispatch = useDispatch()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    value && dispatch(fetchMovies(value))
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event
    setValue(value)
  }

  const inputId = 'search'

  return (
    <form className="search-form" onSubmit={handleSubmit}>
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
        onChange={handleChange}
      />
      <Button type="submit" size="l">
        search
      </Button>
    </form>
  )
}
