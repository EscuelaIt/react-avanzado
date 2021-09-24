import { FC, useState } from 'react'

export const UseState: FC = () => {
  const [value, setValue] = useState('hola')

  const handleClick = () => {
    setValue(prevState => `${prevState} mundo`)
  }

  return (
    <button onClick={handleClick}>
      <span>{value}</span>
    </button>
  )
}
