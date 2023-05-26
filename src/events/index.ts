import { Event } from '../types'
import LogEvents from './LogEvents'
import ClientEvents from './ClientEvents'
import MessageEvents from './MessageEvents'

const events: Event<any>[] = [
  ...ClientEvents,
  ...MessageEvents,
]

export default events