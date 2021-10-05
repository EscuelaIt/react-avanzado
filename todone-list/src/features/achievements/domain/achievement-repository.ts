import { Achievement } from './achievement'
import { FindableAll } from '../../../core/repositories/findable-all'
import { Creatable } from '../../../core/repositories/creatable'
import { AchievementCreate } from './achievement-create'

export interface AchievementRepository extends FindableAll<Achievement>, Creatable<AchievementCreate> {}
