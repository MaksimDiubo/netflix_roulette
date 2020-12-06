export interface IMovie {
  title: string
  tagline: string
  vote_average: number
  vote_count: number
  release_date: string
  poster_path: string
  overview: string
  budget: number
  revenue: number
  runtime: number
  genres: Array<string>
  id: number
}

export interface IResponse {
  totalAmount: number
  data: Array<IMovie>
  offset: number
  limit: number
}

export enum Genres {
  All = 'All',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Horror = 'Horror',
  Comedy = 'Comedy',
}

export enum SortParameters {
  rating = 'rating',
  release_date = 'release_date',
}

export interface IModal {
  isOpen: boolean
  movieId?: null | number
  movie?: IMovie | null
  error?: string | null
}
