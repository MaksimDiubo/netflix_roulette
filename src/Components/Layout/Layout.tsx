import React from 'react'

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
    <div className={`layout-${columns}-column ${additionalClass}`}>
      {children}
    </div>
  )
}
