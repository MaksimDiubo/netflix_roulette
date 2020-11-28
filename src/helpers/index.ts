import { URL } from '../constants'
import { IMovie } from '../models'

export const updateMovie = async (id: string, data: IMovie) => {
  fetch(`${URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  })
}

export const getMovies = async (serchValue: string) => {
  const res = await fetch(`${URL}?search=${serchValue}&searchBy=title`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    },
  })
  if (res.status === 200) {
    return res.json()
  }
  throw Error('error fetching movies')
}

export const addMovie = async (data: IMovie) => {
  const res = await fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  if (res.status === 200 || 204) {
    return res.json()
  }
  throw Error(`error fetching movies`)
}

export const deleteMovie = async (movieId: number) => {
  const res = await fetch(`${URL}/${movieId}`, {
    method: 'DELETE',
  })
  return res.json()
}
