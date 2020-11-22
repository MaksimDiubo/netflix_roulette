import React, { useState } from 'react'

import genres from '../../data/genres.json'

import './ResultsFilter.scss'

export const ResultsFilter = () => {
  const [markerPosition, setMarkerPosition] = useState({
    left: 0,
    width: '32px',
  })

  const indicator = (e: any) => {
    setMarkerPosition({
      left: e.target.offsetLeft,
      width: e.target.offsetWidth,
    })
  }

  return (
    <ul className="results-filter">
      <div
        className="results-filter__marker"
        style={{ left: markerPosition.left, width: markerPosition.width }}
      ></div>
      <li className="results-filter__tag" onClick={indicator}>
        all
      </li>
      {genres.genres.map((genre) => {
        return (
          <li
            className="results-filter__tag"
            key={genre.id}
            onClick={indicator}
          >
            {genre.genre}
          </li>
        )
      })}
    </ul>
  )
}
