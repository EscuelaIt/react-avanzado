import { FC, useEffect, useState } from 'react'
import styles from './app.module.css'
import { GetAllAchievementsQry } from './features/achievements/application/get-all-achievements-qry'
import { container } from './core/dependency-injection/container'
import { Achievement } from './features/achievements/domain/achievement'

export const App: FC = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const getAllAchievementsQry = container.resolve(GetAllAchievementsQry)
    const results = await getAllAchievementsQry.execute()
    setAchievements(results)
  }

  return (
    <main className={styles.container}>
      <div>
        {achievements.map(x => (
          <p key={x.id}>{x.name}</p>
        ))}
      </div>
    </main>
  )
}
