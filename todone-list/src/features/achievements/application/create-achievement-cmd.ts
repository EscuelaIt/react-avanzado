import type { AchievementRepository } from '../domain/achievement-repository'
import { ACHIEVEMENT_REPOSITORY } from '../../../core/dependency-injection/injection-tokens'
import { inject, injectable } from 'tsyringe'
import { AchievementCreate } from '../domain/achievement-create'
import { Command } from '../../../core/use-cases/command'

@injectable()
export class CreateAchievementCmd extends Command<AchievementCreate, void> {
  constructor(@inject(ACHIEVEMENT_REPOSITORY) private readonly achievementRepository: AchievementRepository) {
    super()
  }

  async internalExecute(achievementCreate: AchievementCreate) {
    await this.achievementRepository.create(achievementCreate)
    return
  }
}
