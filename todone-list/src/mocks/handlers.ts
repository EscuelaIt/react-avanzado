import { rest } from 'msw'
import { response } from './response'
import { AchievementMother } from '../tests/achievement-mother'

export const handlers = [
  rest.post(`/oauth/token`, (_req, _, ctx) =>
    response(
      ctx.json({
        token: 'foo',
        refresh_token: 'bar',
      }),
    ),
  ),
  rest.get(`/achievements`, (_req, _, ctx) => response(ctx.json([AchievementMother.learnArchitectureDto()]))),
]
