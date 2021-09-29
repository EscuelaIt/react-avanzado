import { container } from './container'
import { InjectionToken } from 'tsyringe'

export function useDi<T>(injectionToken: InjectionToken<T>) {
  return container.resolve<T>(injectionToken)
}
