import { FC, useState } from 'react'

const ClickCounter: FC = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
    </div>
  )
}

export default ClickCounter
