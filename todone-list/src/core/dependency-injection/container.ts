import { container } from 'tsyringe'
import { ACHIEVEMENT_REPOSITORY, HTTP_CLIENT } from './injection-tokens'
import { AchievementHttpRepository } from '../../features/achievements/infrastructure/achievement-http-repository'
import { httpClient } from '../http-client/http-client'

container.register(ACHIEVEMENT_REPOSITORY, AchievementHttpRepository)
container.registerInstance(HTTP_CLIENT, httpClient)

export { container }
