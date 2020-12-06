import React from 'react'
import { Wrapper, Layout, Logo, SearchBtnIcon } from '../../Components'
import { IMovie } from '../../models'

import poster from '../../assets/images/movie-poster-placeholder.png'

import './Details.scss'

interface IDetailsProps {
  movie: IMovie
  handleClose: () => void
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
  handleClose,
}) => {
  return (
    <div className="details">
      <Wrapper>
        <Layout columns="2">
          <Logo />
          <button className="serch-btn" onClick={handleClose}>
            <SearchBtnIcon />
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
