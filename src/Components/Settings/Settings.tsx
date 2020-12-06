import React from 'react'
import { useToggle } from '../../hooks'
import { useDispatch } from 'react-redux'
import { setEditModalOpen } from '../EditMovieModal/editMovieSlice'
import { setDeleteModalOpen } from '../DeleteMovieModal/deleteMovieSlice'
import { setCurrentMovieId } from '../../Containers/Main/moviesSlice'

import './Settings.scss'

interface ISettingsProps {
  id: number
}

export const Settings: React.FC<ISettingsProps> = ({ id }) => {
  const [isOpen, setIsOpen] = useToggle(false)
  const dispatch = useDispatch()

  const handleSettingsOpen = () => {
    dispatch(setCurrentMovieId(id))
    setIsOpen()
  }

  const handleEditMovieOpen = () => {
    dispatch(setEditModalOpen(true))
    setIsOpen()
  }

  const handleDeleteMovieOpen = () => {
    dispatch(setDeleteModalOpen(true))
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
