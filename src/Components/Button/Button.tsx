import React, { ButtonHTMLAttributes } from 'react'
import classnames from 'classnames'

import './Button.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outlined' | 'contained'
  color?: 'primary' | 'secondary'
  size?: 'm' | 'l' | 'xl'
}

export const Button: React.FC<IButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  size = 'm',
  ...props
}) => {
  const { children } = props

  return (
    <button
      className={classnames({
        [`btn btn-${variant}`]: variant,
        [`btn-${color}`]: color,
        [`btn-${size}`]: size,
      })}
      {...props}
    >
      {children}
    </button>
  )
}
