import React from 'react'

import './Wrapper.scss'

export const Wrapper: React.FC = ({ children }) => {
  return <div className="wrapper">{children}</div>
}
