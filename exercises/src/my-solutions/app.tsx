import React, { FC } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import styles from './app.module.css'
import { Exercise1 } from './exercise-1'

export const App: FC = () => {
  return (
    <BrowserRouter>
      <header className={styles.header}>
        <Link to="/exercise-one">Exercise one</Link>
        <Link to="/exercise-two">Exercise two</Link>
        <Link to="/exercise-three">Exercise three</Link>
        <Link to="/exercise-four">Exercise four</Link>
        <Link to="/exercise-five">Exercise five</Link>
        <Link to="/exercise-six">Exercise six</Link>
        <Link to="/exercise-seven">Exercise seven</Link>
        <Link to="/exercise-eight">Exercise eight</Link>
        <Link to="/exercise-nine">Exercise nine</Link>
        <Link to="/exercise-ten">Exercise ten</Link>
        <Link to="/exercise-eleven">Exercise eleven</Link>
      </header>

      <Route path="/exercise-one">
        <Exercise1 />
      </Route>
    </BrowserRouter>
  )
}
