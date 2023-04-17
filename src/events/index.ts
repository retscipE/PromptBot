import { Event } from '../types'
import ClientEvents from './ClientEvents'

const events: Event<any>[] = [
  ...ClientEvents
]

export default events