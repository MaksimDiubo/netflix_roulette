import React, { ChangeEvent } from 'react'
import { Input, DatePicker, Select } from '../../Components'
import { IMovie } from '../../models'

interface IModalInnerProps {
  movie: IMovie
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const ModalInner: React.FC<IModalInnerProps> = ({
  movie: {
    title = '',
    release_date = '',
    poster_path = '',
    genres = [],
    overview = '',
    runtime = '',
  },
  onChange,
}) => {
  return (
    <>
      <Input
        title="title"
        placeholder="Title here"
        value={title}
        onChange={onChange}
        name="title"
      />
      <DatePicker
        title="release date"
        value={release_date}
        onChange={onChange}
        name="release_date"
      />
      <Input
        title="movie url"
        placeholder="Movie URL here"
        value={poster_path}
        onChange={onChange}
        name="poster_path"
      />
      <Select defaultCheckedItems={genres} onChange={onChange} />
      <Input
        title="overview"
        placeholder="Overview here"
        value={overview}
        onChange={onChange}
        name={'overview'}
      />
      <Input
        title="runtime"
        placeholder="Runtime here"
        value={runtime}
        onChange={onChange}
        name="runtime"
      />
    </>
  )
}
