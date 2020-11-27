import React, { useState, useEffect, memo, ChangeEvent } from 'react'
import { useToggle } from '../../hooks'

import { CheckboxesList } from '../../Components'

import classnames from 'classnames'

import './Select.scss'

interface ISelectProps {
  defaultCheckedItems?: string[]
}

export const Select: React.FC<ISelectProps> = memo(
  ({ defaultCheckedItems = [] }) => {
    const [isOpen, setIsOpen] = useToggle(false)
    const [chekedItems, setChekedItems] = useState([] as string[])

    useEffect(() => {
      setChekedItems(defaultCheckedItems)
    }, [defaultCheckedItems])

    const selectTitle = chekedItems.length
      ? chekedItems.join(',')
      : 'Select genre'

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const {
        target: { checked, name },
      } = event
      checked
        ? setChekedItems((prevItems) => [...prevItems, name])
        : setChekedItems((prevItems) =>
            prevItems.filter((item) => item !== name)
          )
    }
    return (
      <div className="select">
        <h3 className="select__title">genre</h3>
        <div className="select__text">
          <span>{selectTitle}</span>
          <button
            className={classnames('select__arrow', {
              select__arrow_rotate: isOpen,
            })}
            onClick={setIsOpen}
          ></button>
        </div>
        {isOpen && (
          <div className="select__options">
            <CheckboxesList chekedItems={chekedItems} onChange={handleChange} />
          </div>
        )}
      </div>
    )
  }
)
