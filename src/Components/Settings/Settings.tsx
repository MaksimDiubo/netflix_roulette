import React from 'react'
import { useToggle } from '../../hooks'
import { useDispatch } from 'react-redux'
import {
  setEditModalOpen,
  setEditMovieData,
} from '../EditMovieModal/editMovieSlice'
import {
  setDeleteModalOpen,
  setDeleteMovieId,
} from '../DeleteMovieModal/deleteMovieSlice'
import { IMovie } from '../../models'

import './Settings.scss'

interface ISettingsProps {
  movie: IMovie
}

export const Settings: React.FC<ISettingsProps> = ({ movie }) => {
  const [isOpen, setIsOpen] = useToggle(false)
  const dispatch = useDispatch()

  const handleEditMovieOpen = () => {
    dispatch(setEditMovieData(movie))
    dispatch(setEditModalOpen())
    setIsOpen()
  }

  const handleDeleteMovieOpen = () => {
    dispatch(setDeleteMovieId(movie.id))
    dispatch(setDeleteModalOpen())
    setIsOpen()
  }

  return (
    <>
      <button className="settings-open-btn" onClick={setIsOpen}>
        .
      </button>
      {isOpen && (
        <div className="settings">
          <button className="settings__close-btn" onClick={setIsOpen}></button>
          <button className="settings__btn" onClick={handleEditMovieOpen}>
            Edit
          </button>
          <button className="settings__btn" onClick={handleDeleteMovieOpen}>
            Delite
          </button>
        </div>
      )}
    </>
  )
}
