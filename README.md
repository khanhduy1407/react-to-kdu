# react-to-kdu

## Install

```bash
npm i @nkduy/react-to-kdu
```

## Usage

```js
import { createApp, h } from 'kdu'
import React from 'react'
import toKdu from '@nkduy/react-to-kdu'

const ReactComponent = () => {
  const [count, setCount] = React.useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}

const KduComponent = toKdu(ReactComponent)

createApp({
  render: () => h(KduComponent),
}).mount('#app')
```

## License

[MIT](./LICENSE) License.
