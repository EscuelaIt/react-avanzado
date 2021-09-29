import { Achievement } from '../domain/achievement'
import { AchievementDto } from './achievement-dto'
import { injectable } from 'tsyringe'
import { AchievementRepository } from '../domain/achievement-repository'
import { httpClient } from '../../../core/http-client/http-client'

@injectable()
export class AchievementHttpRepository implements AchievementRepository {
  private static readonly URL = '/achievements'

  async findAll(): Promise<Achievement[]> {
    const response = await httpClient.get<AchievementDto[]>(AchievementHttpRepository.URL)
    return response.data.map(x => ({ ...x, date: new Date(x.date) }))
  }
}
