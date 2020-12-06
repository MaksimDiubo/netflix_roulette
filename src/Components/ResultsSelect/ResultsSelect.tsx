import React, { ChangeEvent } from 'react'

import './ResultsSelect.scss'

interface IResultSelectProps {
  sortMovies: (sortParam: string) => void
}

export const ResultsSelect: React.FC<IResultSelectProps> = ({ sortMovies }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event
    sortMovies(value)
  }
  const resultsSelectId = 'results-select'
  return (
    <div className="results-select">
      <label className="results-select__label" htmlFor={resultsSelectId}>
        sort by
      </label>
      <select
        className="results-select__select"
        name="results-select"
        id={resultsSelectId}
        defaultValue="release date"
        onChange={handleChange}
      >
        <option className="results-select__option" value="release_date">
          release date
        </option>
        <option value="vote_average">rating</option>
      </select>
    </div>
  )
}
