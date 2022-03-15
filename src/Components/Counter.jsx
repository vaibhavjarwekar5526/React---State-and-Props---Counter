import React from 'react'

const Counter = (props) => {
    const [count, setCount] = React.useState(props.value)
  return (
    <>
        <h1>Counter : {count}</h1>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
        <button onClick={() => setCount(count*2)}>Double</button>
    </>
  )
}

export { Counter }