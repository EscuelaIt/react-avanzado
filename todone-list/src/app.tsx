import { FC, useEffect, useState } from 'react'
import styles from './app.module.css'
import { GetAllAchievementsQry } from './features/achievements/application/get-all-achievements-qry'
import { container } from './core/dependency-injection/container'
import { Achievement } from './features/achievements/domain/achievement'
import { AchievementForm } from './features/achievements/delivery/achievement-form'
import { useI18n } from './core/i18n/use-i18n'

export const App: FC = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const { t } = useI18n()

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
      {t('homeTitle', { value: 5 })}
      <AchievementForm />
      <div>
        {achievements.map(x => (
          <p key={x.id}>{x.name}</p>
        ))}
      </div>
    </main>
  )
}
