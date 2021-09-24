import { createContext, FC, useContext, useState } from 'react'

interface CounterState {
  counter: number
  setCounter: (newCounter: number) => Promise<void>
  incrementCounter: () => void
}

export const CounterContext = createContext<CounterState>({
  counter: Number(localStorage.getItem('counter')) ?? 0,
  setCounter: async () => {},
  incrementCounter: () => {},
})

const ComponentA: FC = () => {
  const { counter, incrementCounter, setCounter } = useContext(CounterContext)
  return (
    <>
      <button onClick={() => setCounter(counter + 10)}>{counter}</button>
      <button onClick={() => incrementCounter()}>{counter}</button>
    </>
  )
}

const ComponentB: FC = () => {
  return (
    <CounterContext.Consumer>
      {({ counter, setCounter }) => <button onClick={() => setCounter(counter + 10)}>{counter}</button>}
    </CounterContext.Consumer>
  )
}

export const Context: FC = () => {
  const [state, setState] = useState(0)

  async function setData() {
    setState(1)
  }

  return (
    <CounterContext.Provider
      value={{
        counter: state,
        setCounter: counter => setData(),
        incrementCounter: () => setState(state + 1),
      }}
    >
      <ComponentA />
      <ComponentB />
    </CounterContext.Provider>
  )
}
