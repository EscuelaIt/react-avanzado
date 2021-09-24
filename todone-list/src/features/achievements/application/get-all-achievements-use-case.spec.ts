import { GetAllAchievementsUseCase } from './get-all-achievements-use-case'
import { instance, mock, when } from 'ts-mockito'
import { AchievementRepository } from '../domain/achievement-repository'
import { Achievement } from '../domain/achievement'
import { AchievementMother } from '../../../../tests/achievement.mother'

describe('GetAllAchievementsUseCase', () => {
  it('should get all the achievements', async () => {
    const { achievementRepository, getAllAchievementsUseCase } = setup()
    when(achievementRepository.findAll()).thenResolve([AchievementMother.learnArchitecture()])

    const actual = await getAllAchievementsUseCase.execute()

    expect(actual).toEqual<Achievement[]>([AchievementMother.learnArchitecture()])
  })
})

function setup() {
  const achievementRepository = mock<AchievementRepository>()
  const getAllAchievementsUseCase = new GetAllAchievementsUseCase(instance(achievementRepository))
  return { achievementRepository, getAllAchievementsUseCase }
}
