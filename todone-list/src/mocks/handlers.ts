import { rest } from 'msw'
import { response } from './response'
import { AchievementMother } from '../tests/achievement-mother'

export const handlers = [
  rest.get(`http://localhost:8080/achievements`, (_req, _, ctx) =>
    response(ctx.json([AchievementMother.learnArchitectureDto()])),
  ),
]
