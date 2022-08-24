import { useState } from "react"

export function Counter() {

  let [contas, setContas] = useState(0)

  function increment() {
    setContas(contas + 1);
  }

  return (
    <div>
      <h2>{contas}</h2>
      <button type="button" onClick={increment}>
        Incrementa
      </button>
    </div>
  )
}