import type { AchievementRepository } from '../domain/achievement-repository'
import { ACHIEVEMENT_REPOSITORY } from '../../../core/dependency-injection/injection-tokens'
import { inject, injectable } from 'tsyringe'
import { AchievementCreate } from '../domain/achievement-create'

@injectable()
export class CreateAchievementCmd {
  constructor(@inject(ACHIEVEMENT_REPOSITORY) private readonly achievementRepository: AchievementRepository) {}

  async execute(achievementCreate: AchievementCreate) {
    await this.achievementRepository.create(achievementCreate)
    return
  }
}
