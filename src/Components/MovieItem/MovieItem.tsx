import React, { useState } from 'react'

import poster from '../../assets/images/movie-poster-placeholder.png'

import { visibilityToggle } from '../../utils/utils'

import './MovieItem.scss'

interface IMovieItemProps {
  image: string
  title: string
  date: string
  ganre: Array<string>
  editModalShow: () => void
  deleteModalShow: () => void
}

export const MovieItem: React.FC<IMovieItemProps> = ({
  image,
  title,
  date,
  ganre,
  editModalShow,
  deleteModalShow,
}) => {
  const [isControlsOpen, setControlsOpen] = useState(false)

  return (
    <div className="movie-item">
      <img
        src={image}
        onError={(e: any) => {
          e.target.src = poster
          e.target.onerror = null
        }}
        alt="poster"
        width="345"
        height="465"
      />
      <button
        className="movie-item__controls-show-btn"
        onClick={() => visibilityToggle(isControlsOpen, setControlsOpen)}
      >
        .
      </button>
      {isControlsOpen ? (
        <div className="movie-item__controls-modal">
          <button
            className="movie-item__controls-close-btn"
            onClick={() => visibilityToggle(isControlsOpen, setControlsOpen)}
          ></button>
          <button
            className="movie-item__control"
            onClick={() => {
              editModalShow()
              visibilityToggle(isControlsOpen, setControlsOpen)
            }}
          >
            Edit
          </button>
          <button
            className="movie-item__control"
            onClick={() => {
              deleteModalShow()
              visibilityToggle(isControlsOpen, setControlsOpen)
            }}
          >
            Delite
          </button>
        </div>
      ) : null}
      <div className="movie-item__description">
        <h4 className="movie-item__title">{title}</h4>
        <span className="movie-item__date">{date.slice(0, 4)}</span>
        <span className="movie-item__genre">{ganre.join(', ')}</span>
      </div>
    </div>
  )
}
