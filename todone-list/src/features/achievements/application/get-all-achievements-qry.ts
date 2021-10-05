import { inject, injectable } from 'tsyringe'
import type { AchievementRepository } from '../domain/achievement-repository'
import type { Achievement } from '../domain/achievement'
import { ACHIEVEMENT_REPOSITORY } from '../../../core/dependency-injection/injection-tokens'
import { Query } from '../../../core/use-cases/query'

@injectable()
export class GetAllAchievementsQry extends Query<void, Achievement[]> {
  constructor(@inject(ACHIEVEMENT_REPOSITORY) private readonly achievementRepository: AchievementRepository) {
    super()
  }

  internalExecute(): Promise<Achievement[]> {
    return this.achievementRepository.findAll()
  }
}
