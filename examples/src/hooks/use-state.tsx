import { FC, useState } from 'react'

export const UseState: FC = () => {
  const [value, setValue] = useState('...')

  const handleClick = () => {
    setValue('Hello world')
  }

  return (
    <button onClick={handleClick}>
      <span>{value}</span>
    </button>
  )
}
