import { FC, useState } from 'react'

interface Person {
  name: string
  job: {
    company: string
  }
}

export const UseStateImmutable: FC = () => {
  const [array, setArray] = useState<number[]>([])
  const [person, setPerson] = useState<Person>({ name: 'foo', job: { company: 'bar' } })

  const handleClick = () => {
    setArray(prevValue => [...prevValue, 1])
    setPerson(prevState => ({
      ...prevState,
      job: {
        company: 'Qux',
      },
    }))
  }

  return (
    <button onClick={handleClick}>
      {array.map(x => (
        <span key={x}>{x}</span>
      ))}
    </button>
  )
}
