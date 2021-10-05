import { Achievement } from '../domain/achievement'
import { AchievementDto } from './achievement-dto'
import { inject, injectable } from 'tsyringe'
import { AchievementRepository } from '../domain/achievement-repository'
import type { HttpClient } from '../../../core/http-client/http-client'
import { HTTP_CLIENT } from '../../../core/dependency-injection/injection-tokens'
import { AchievementCreate } from '../domain/achievement-create'

@injectable()
export class AchievementHttpRepository implements AchievementRepository {
  private static readonly URL = '/achievements'

  constructor(@inject(HTTP_CLIENT) private readonly httpClient: HttpClient) {}

  async findAll(): Promise<Achievement[]> {
    const response = await this.httpClient.get<AchievementDto[]>(AchievementHttpRepository.URL)
    return response.data.map(x => ({ ...x, date: new Date(x.date) }))
  }

  async create(achievementCreate: AchievementCreate): Promise<void> {
    await this.httpClient.post<AchievementCreate>(AchievementHttpRepository.URL, achievementCreate)
    return
  }
}
