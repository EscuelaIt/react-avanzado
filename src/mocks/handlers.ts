import { rest } from 'msw'
import { response } from './response'

export const handlers = [
  rest.post(`/oauth/token`, (_req, _, ctx) =>
    response(
      ctx.json({
        token: 'foo',
        refresh_token: 'bar',
      }),
    ),
  ),
  rest.get(`/todos`, (_req, _, ctx) => response(ctx.json({ message: 'hello' }))),
]
