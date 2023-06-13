import { createApp, h } from 'kdu'
import React from 'react'
import { toKdu } from '../src'

const ReactApp: React.FC<{ initial: number }> = ({ initial }) => {
  const [count, setCount] = React.useState(initial)

  React.useEffect(() => {
    return () => {
      console.log('Goodbye!')
    }
  }, [])

  return (
    <div className="app">
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

const App = toKdu(ReactApp)

const app = createApp({
  setup() {
    return () => h(App, { initial: 10 })
  },
})

app.mount('#app')
