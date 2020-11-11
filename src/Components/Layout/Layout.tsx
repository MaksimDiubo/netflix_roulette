import React from 'react'

import './Layout.scss'

interface ILayoutProps {
  columns?: number
}

export const Layout: React.FC<ILayoutProps> = ({ columns = 2, children }) => {
  return <div className={`layout-${columns}-column`}>{children}</div>
}
