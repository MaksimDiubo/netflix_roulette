import React from 'react'
import { useToggle } from '../../hooks'

import './Settings.scss'

interface ISettingsProps {
  onEditModalOpen: () => void
  onDeleteModalOpen: () => void
}

export const Settings: React.FC<ISettingsProps> = ({
  onEditModalOpen,
  onDeleteModalOpen,
}) => {
  const [isOpen, setIsOpen] = useToggle(false)

  const handleEditMovieOpen = () => {
    onEditModalOpen()
    setIsOpen()
  }

  const handleDeleteMovieOpen = () => {
    onDeleteModalOpen()
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
