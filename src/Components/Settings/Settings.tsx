import React from 'react'
import { useToggle } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
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

  const handleSettingsOpen = () => {
    dispatch(setDeleteMovieId(movie.id))
    dispatch(setEditMovieData(movie))
    setIsOpen()
  }

  const handleEditMovieOpen = () => {
    dispatch(setEditModalOpen())
    setIsOpen()
  }

  const handleDeleteMovieOpen = () => {
    dispatch(setDeleteModalOpen())
    setIsOpen()
  }

  return (
    <>
      <button className="settings-open-btn" onClick={handleSettingsOpen}>
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
