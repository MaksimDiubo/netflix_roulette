import { URL } from '../constants'
import { IMovie } from '../models'

export const updateData = async (id: number, data: IMovie) => {
  fetch(`${URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  })
}

export const getData = async (serchValue = '', sortBy = '', filter = '') => {
  const url = `${URL}?sortBy=${sortBy}&sortOrder=desc&search=${serchValue}&searchBy=title&filter=${filter}&offset=0&limit=18`
  const res = await fetch(url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    },
  })
  if (res.status === 200) {
    const result = await res.json()
    return result
  }
  throw Error('error fetching movies')
}

export const addData = async (data: IMovie) => {
  const res = await fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  if (res.status === 200 || 204) {
    const data = await res.json()
    return data
  }
  throw Error(`error fetching movies`)
}

export const deleteData = async (movieId: number) => {
  const res = await fetch(`${URL}/${movieId}`, {
    method: 'DELETE',
  })
  const data = await res.json()
  return data
}
