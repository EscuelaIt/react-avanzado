import { GetAllAchievementsQry } from './get-all-achievements-qry'
import { instance, mock, when } from 'ts-mockito'
import type { AchievementRepository } from '../domain/achievement-repository'
import { Achievement } from '../domain/achievement'
import { AchievementMother } from '../../../tests/achievement-mother'

describe('GetAllAchievementsQry', () => {
  it('should get all the achievements', async () => {
    const { achievementRepository, getAllAchievementsQry } = setup()
    when(achievementRepository.findAll()).thenResolve([AchievementMother.learnArchitecture()])

    const actual = await getAllAchievementsQry.execute()

    expect(actual).toEqual<Achievement[]>([AchievementMother.learnArchitecture()])
  })
})

function setup() {
  const achievementRepository = mock<AchievementRepository>()
  const getAllAchievementsQry = new GetAllAchievementsQry(instance(achievementRepository))
  return { achievementRepository, getAllAchievementsQry }
}
