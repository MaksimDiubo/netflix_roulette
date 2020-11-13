import React, { useState } from 'react'

import './ResultsFilter.scss'

export const ResultsFilter = () => {
  const tags = [
    { genre: 'all', id: '01' },
    { genre: 'documentary', id: '02' },
    { genre: 'comedy', id: '03' },
    { genre: 'horror', id: '04' },
    { genre: 'crime', id: '05' },
  ]

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
        id="marker"
        style={{ left: markerPosition.left, width: markerPosition.width }}
      ></div>
      {tags.map((tag) => {
        return (
          <li key={tag.id} onClick={indicator}>
            {tag.genre}
          </li>
        )
      })}
    </ul>
  )
}
