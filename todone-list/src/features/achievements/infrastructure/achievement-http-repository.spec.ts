import { AchievementHttpRepository } from './achievement-http-repository'
import { instance, mock, when } from 'ts-mockito'
import { AchievementMother } from '../../../tests/achievement-mother'
import { HttpClient } from '../../../core/http-client/http-client'
import { AxiosResponse } from 'axios'
import { Achievement } from '../domain/achievement'

describe('AchievementHttpRepository', () => {
  it('should get the achievements', async () => {
    const { achievementHttpRepository, httpClient } = setup()
    when(httpClient.get('/achievements')).thenResolve({
      data: [AchievementMother.learnArchitectureDto()],
    } as AxiosResponse)

    const actual = await achievementHttpRepository.findAll()

    expect(actual).toEqual<Achievement[]>([AchievementMother.learnArchitecture()])
  })
})

function setup() {
  const httpClient = mock<HttpClient>()

  return {
    httpClient,
    achievementHttpRepository: new AchievementHttpRepository(instance(httpClient)),
  }
}
