import { container } from 'tsyringe'
import { ACHIEVEMENT_REPOSITORY, GLOBAL } from './injection-tokens'
import { AchievementHttpRepository } from '../../features/achievements/infrastructure/achievement-http-repository'

container.register(ACHIEVEMENT_REPOSITORY, AchievementHttpRepository)
container.registerInstance(GLOBAL, globalThis)

export { container }
