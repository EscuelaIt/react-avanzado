import { AchievementHttpRepository } from './achievement-http-repository'
import { anything, instance, mock, when } from 'ts-mockito'
import { AchievementMother } from '../../../tests/achievement-mother'

describe('AchievementHttpRepository', () => {
  it('should get the achievements', () => {
    const { achievementHttpRepository, global } = setup()

    when(global.fetch('/achievements')).thenResolve({
      json(): Promise<any> {
        return [AchievementMother.learnArchitectureDto()]
      },
    })
  })
})

function setup() {
  const global = mock<typeof globalThis>()

  return {
    global,
    achievementHttpRepository: new AchievementHttpRepository(instance(global)),
  }
}
