import React from 'react'

import './Logo.scss'

interface ILogoProps {
  isHeaderLogo?: boolean
}

export const Logo: React.FC<ILogoProps> = ({ isHeaderLogo = false }) => {
  return (
    <>
      {isHeaderLogo ? (
        <h1 className="visually-hidden">Netflix Roulette</h1>
      ) : null}
      <span className="logo">
        <b>netflix</b>roulette
      </span>
    </>
  )
}
