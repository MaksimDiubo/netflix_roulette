import React, { useState } from 'react'
import { Genres } from '../../models'

import './ResultsFilter.scss'

interface IResultFilterProps {
  filterMovies: (filter: string) => void
}

export const ResultsFilter: React.FC<IResultFilterProps> = ({
  filterMovies,
}) => {
  const [markerPosition, setMarkerPosition] = useState({
    left: 0,
    width: '32px',
  })

  const setMarker = (e: any) => {
    setMarkerPosition({
      left: e.target.offsetLeft,
      width: e.target.offsetWidth,
    })
  }

  const handleClick = (e: any) => {
    const {
      target: { textContent },
    } = e
    if (textContent === 'All') {
      setMarker(e)
      filterMovies('')
      return
    }
    setMarker(e)
    filterMovies(textContent)
  }

  return (
    <ul className="results-filter">
      <div
        className="results-filter__marker"
        style={{ left: markerPosition.left, width: markerPosition.width }}
      ></div>
      {Object.values(Genres).map((genre, index) => {
        return (
          <li
            className="results-filter__tag"
            key={index.toString()}
            onClick={handleClick}
          >
            {genre}
          </li>
        )
      })}
    </ul>
  )
}
