// npm
import type { Component } from 'solid-js'

type HelloProps = {
  name: string
}

const Hello: Component<HelloProps> = (props) => {
  return <div>
    Hello {props.name}
  </div>
}

export default Hello
