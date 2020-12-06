import React, { useState, useEffect, memo, ChangeEvent } from 'react'
import { useToggle } from '../../hooks'

import { CheckboxesList } from '../../Components'

import classnames from 'classnames'

import './Select.scss'

interface ISelectProps {
  defaultCheckedItems?: string[]
  name?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Select: React.FC<ISelectProps> = memo(
  ({ defaultCheckedItems, onChange }) => {
    const [isOpen, setIsOpen] = useToggle(false)
    const [chekedItems, setChekedItems] = useState(
      defaultCheckedItems || ([] as string[])
    )

    useEffect(() => {
      defaultCheckedItems && setChekedItems(defaultCheckedItems)
    }, [defaultCheckedItems])

    return (
      <div className="select">
        <h3 className="select__title">genre</h3>
        <div className="select__text">
          <span>
            {chekedItems.length ? chekedItems.join(', ') : 'Select genre'}
          </span>
          <button
            className={classnames('select__arrow', {
              select__arrow_rotate: isOpen,
            })}
            onClick={setIsOpen}
          ></button>
        </div>
        {isOpen && (
          <div className="select__options">
            <CheckboxesList chekedItems={chekedItems} onChange={onChange} />
          </div>
        )}
      </div>
    )
  }
)
