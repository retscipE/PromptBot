import { category } from "../../utils";
import ping from './ping'
import help from './help'

// TODO: Comments on Utility commands
export default category("Utility", "General commands used for utility purposes.", [
  ping,
  help,
])