import { FC, useEffect, useState } from 'react'
import styles from './app.module.css'
import { GetAllAchievementsQry } from './features/achievements/application/get-all-achievements-qry'
import { container } from './core/dependency-injection/container'
import { Achievement } from './features/achievements/domain/achievement'
import { AchievementForm } from './features/achievements/delivery/achievement-form'
import { useTranslation } from 'react-i18next'

export const App: FC = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const { t } = useTranslation(['global', 'achievements'])

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
      <h1>{t('global:homeTitle')}</h1>
      <h2>{t('achievements:homeTitle')}</h2>
      <AchievementForm />
      <div>
        {achievements.map(x => (
          <p key={x.id}>{x.name}</p>
        ))}
      </div>
    </main>
  )
}
