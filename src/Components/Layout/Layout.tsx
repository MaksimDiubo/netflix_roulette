import React from 'react'
import classnames from 'classnames'

import './Layout.scss'

interface ILayoutProps {
  columns?: string
  additionalClass?: string
}

export const Layout: React.FC<ILayoutProps> = ({
  columns = '1',
  additionalClass,
  children,
}) => {
  return (
    <div
      className={classnames({
        [`layout-${columns}-column`]: columns,
        additionalClass: additionalClass,
      })}
    >
      {children}
    </div>
  )
}
