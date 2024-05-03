import { useState } from "react"

export default function FunctionalComponent() {
  const [value, setValue] = useState(0)

  function handlePlus() {
    setValue(value + 1)
  }

  function handleMin() {
    if (value > 0) {
      setValue(value - 1)
    }
  }

  return(
    <div>
      <button onClick={handleMin}>-</button>
      <span>{value}</span>
      <button onClick={handlePlus}>+</button>
    </div>
  )
}