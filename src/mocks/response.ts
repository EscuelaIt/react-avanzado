import { context, response as responseMSW } from 'msw'
import { ResponseTransformer } from 'msw/lib/types/response'

const isTestMode = process.env.NODE_ENV === 'test'

export function response(...transformers: ResponseTransformer[]) {
  if (isTestMode) {
    return responseMSW(...transformers)
  }

  return responseMSW(...transformers, context.delay())
}
