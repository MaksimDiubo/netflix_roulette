import React from 'react'

import './ResultCount.scss'

interface IResultCount {
  totalAmount: number
}

export const ResultCount: React.FC<IResultCount> = ({ totalAmount }) => {
  return (
    <span className="result-count">
      <b>{totalAmount} </b>movies found
    </span>
  )
}
