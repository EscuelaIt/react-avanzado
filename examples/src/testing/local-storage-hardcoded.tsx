import React, { FC, useEffect, useState } from 'react'

export const LocalStorageHardcoded: FC = () => {
  const [value, setValue] = useState(localStorage.getItem('input') ?? '')

  useEffect(() => {
    localStorage.setItem('input', value)
  }, [value])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <>
      <input aria-label="Input" onChange={handleChange} value={value} />
    </>
  )
}
