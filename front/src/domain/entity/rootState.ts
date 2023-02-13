import { AlertState } from './alert'
import { Colleges } from './college'
import { Profile } from './profile'
import { ValidationState } from './validation'

export type RootState = {
  profile: Profile
  colleges: Colleges
  validation: ValidationState
  alert: AlertState
}
