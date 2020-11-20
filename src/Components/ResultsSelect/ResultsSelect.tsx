import React from 'react'

import './ResultsSelect.scss'

export const ResultsSelect = () => {
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
      >
        <option className="results-select__option" value="release date">
          release date
        </option>
        <option value="rating">rating</option>
        <option value="alphabet">alphabet</option>
      </select>
    </div>
  )
}
