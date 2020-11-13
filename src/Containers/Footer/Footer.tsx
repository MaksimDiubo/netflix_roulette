import React from 'react'

import { Layout, Logo } from '../../Components'

import './Footer.scss'

export const Footer: React.FC = () => {
  return (
    <Layout additionalClass="footer">
      <Logo />
    </Layout>
  )
}
