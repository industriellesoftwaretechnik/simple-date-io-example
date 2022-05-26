import React from "react"
import { LocalDateContextProvider } from "./context/LocalDateContextProvider"
import { MyComp } from "./components/MyComp"

const App = () => {
  return (
    <>
      <LocalDateContextProvider>
        <MyComp />
      </LocalDateContextProvider>
    </>
  )
}

export default App
