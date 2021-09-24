import { Achievement } from '../domain/achievement'
import { AchievementRepository } from '../domain/achievement-repository'

export class GetAllAchievementsUseCase {
  constructor(private readonly achievementRepository: AchievementRepository) {}

  execute(): Promise<Achievement[]> {
    return this.achievementRepository.findAll()
  }
}
