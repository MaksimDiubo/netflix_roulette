import React from 'react'

import './ResultsSelect.scss'

export const ResultsSelect = () => {
  return (
    <div className="results-select">
      <label htmlFor="results-select">sort by</label>
      <select
        name="results-select"
        id="results-select"
        defaultValue="release date"
      >
        <option value="release date">release date</option>
        <option value="rating">rating</option>
        <option value="alphabet">alphabet</option>
      </select>
    </div>
  )
}
