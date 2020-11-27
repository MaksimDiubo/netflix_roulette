import React, { ChangeEvent } from 'react'

import { Checkbox } from '../../Components'

import { genres } from '../../data'

import './CheckboxesList.scss'

interface ICheckboxesListProps {
  chekedItems: string[]
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const CheckboxesList: React.FC<ICheckboxesListProps> = ({
  chekedItems,
  onChange,
}) => {
  return (
    <>
      {genres.map((item) => {
        const { id, genre } = item
        const defaultChecked = chekedItems.includes(genre)
        return (
          <Checkbox
            key={id}
            genre={genre}
            defaultChecked={defaultChecked}
            onChange={onChange}
          />
        )
      })}
    </>
  )
}
