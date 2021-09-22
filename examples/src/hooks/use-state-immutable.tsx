import { FC, useState } from 'react'

export const UseStateImmutable: FC = () => {
  const [array, setArray] = useState<number[]>([])

  const handleClick = () => {
    setArray([...array, 1])
  }

  return (
    <button onClick={handleClick}>
      {array.map(x => (
        <span key={x}>{x}</span>
      ))}
    </button>
  )
}
