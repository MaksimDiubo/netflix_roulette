import { useState, useCallback, ChangeEvent } from 'react'
import { IMovie } from '../models'

export const useChange = (
  initialValue: IMovie
): [IMovie, (event?: ChangeEvent<HTMLInputElement>) => void] => {
  const [state, setState] = useState(initialValue)

  const handleChange = useCallback(
    (event?: ChangeEvent<HTMLInputElement>) => {
      if (!event) {
        setState(initialValue)
        return
      }

      const {
        target: { type, checked, name, value },
      } = event

      if (type === 'text' || type === 'date') {
        setState({ ...state, [name]: value })
        return
      }
      if (type === 'checkbox') {
        checked
          ? setState((prev) => {
              return prev.genres
                ? { ...prev, genres: [...prev.genres, name] }
                : { ...prev, genres: [name] }
            })
          : setState((prev) => {
              return {
                ...prev,
                genres: prev.genres.filter((item) => item !== name),
              }
            })
        return
      }
      setState(initialValue)
    },
    [state, initialValue]
  )

  return [state, handleChange]
}
