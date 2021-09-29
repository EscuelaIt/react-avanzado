import { Achievement } from '../domain/achievement'
import { AchievementDto } from './achievement-dto'
import { inject, injectable } from 'tsyringe'
import { AchievementRepository } from '../domain/achievement-repository'
import { GLOBAL } from '../../../core/dependency-injection/injection-tokens'

@injectable()
export class AchievementHttpRepository implements AchievementRepository {
  constructor(@inject(GLOBAL) private readonly global: typeof globalThis) {}

  async findAll(): Promise<Achievement[]> {
    const achievementDtos: AchievementDto[] = await this.global.fetch('/achievements').then(x => x.json())
    return achievementDtos.map(x => ({ ...x, date: new Date(x.date) }))
  }
}
