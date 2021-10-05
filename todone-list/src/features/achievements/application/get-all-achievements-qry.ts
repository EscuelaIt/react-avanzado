import { inject, injectable } from 'tsyringe'
import type { AchievementRepository } from '../domain/achievement-repository'
import type { Achievement } from '../domain/achievement'
import { ACHIEVEMENT_REPOSITORY } from '../../../core/dependency-injection/injection-tokens'

@injectable()
export class GetAllAchievementsQry {
  constructor(@inject(ACHIEVEMENT_REPOSITORY) private readonly achievementRepository: AchievementRepository) {}

  execute(): Promise<Achievement[]> {
    return this.achievementRepository.findAll()
  }
}
