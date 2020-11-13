import React from 'react'

import {
  Wrapper,
  Layout,
  ResultsFilter,
  ResultsSelect,
  ResultCount,
  MoviesList,
} from '../../Components'

import './Main.scss'

export const Main = () => {
  return (
    <div className="main">
      <Wrapper>
        <Layout columns="2">
          <ResultsFilter />
          <ResultsSelect />
        </Layout>
        <ResultCount />
        <Layout columns="3">
          <MoviesList />
        </Layout>
      </Wrapper>
    </div>
  )
}
