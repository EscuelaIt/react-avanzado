import { FC, useState } from 'react'

export const UseReducerOriginal: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [number, setNumber] = useState(0)

  const getNumber = async () => {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        const number = Math.floor(Math.random() * 100)
        if (number > 50) {
          reject(new Error('There was an error'))
        }
        resolve(number)
      }, 1000)
    })
  }

  const handleClick = async () => {
    try {
      setError(null)
      setIsLoading(true)
      setNumber(await getNumber())
    } catch (e) {
      setError(e as Error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <p>Loading</p>
  }

  return (
    <div>
      {error !== null && <p>{error.message}</p>}
      <button onClick={handleClick}>{number}</button>
    </div>
  )
}
