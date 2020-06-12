import {
  hello
} from './hello.js'
import {
  name
} from './name.js'

const message = () => {
  console.log(`${hello} ${name}!`)
}

export default message