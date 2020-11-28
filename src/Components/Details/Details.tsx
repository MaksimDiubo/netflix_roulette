import React from 'react'
import { Wrapper, Layout, Logo } from '../../Components'

import poster from '../../assets/images/movie-poster-placeholder.png'

import './Details.scss'

interface IDetailsProps {
  movie: {
    title: string
    tagline: string
    vote_average: number
    release_date: string
    poster_path: string
    overview: string
    runtime: number
  }
}

export const Details: React.FC<IDetailsProps> = ({
  movie: {
    title,
    tagline,
    vote_average,
    release_date,
    poster_path,
    overview,
    runtime,
  },
}) => {
  return (
    <div className="details">
      <Wrapper>
        <Layout columns="2">
          <Logo />
          <button className="serch-btn">
            <svg className="serch-btn__icon" viewBox="0 0 24 24">
              <path
                fill="rgb(246, 82, 97)"
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        </Layout>
        <Layout columns="2">
          <img
            src={poster_path}
            onError={(e: any) => {
              e.target.src = poster
              e.target.onerror = null
            }}
            alt="movie__poster"
            className="details__poster"
          />
          <div className="details__description">
            <div className="details__header">
              <h3 className="details__title">{title}</h3>
              <div className="details__rating">{vote_average}</div>
            </div>

            <span className="details__tagline">{tagline}</span>
            <span className="details__release-date">
              {release_date.slice(0, 4)}
            </span>
            <span className="details__runtime">{`${runtime} min`}</span>
            <p className="details__overview">{overview}</p>
          </div>
        </Layout>
      </Wrapper>
    </div>
  )
}
