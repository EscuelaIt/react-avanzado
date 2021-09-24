import { AchievementRepository } from '../domain/achievement-repository'
import { Achievement } from '../domain/achievement'
import { AchievementDto } from './achievement-dto'

export class AchievementHttpRepository implements AchievementRepository {
  async findAll(): Promise<Achievement[]> {
    const achievementDtos: AchievementDto[] = [{ id: 'sfn-sqju-nba', name: 'Learn architecture', date: '2021-07-24' }]
    return achievementDtos.map(x => ({ ...x, date: new Date(x.date) }))
  }
}
