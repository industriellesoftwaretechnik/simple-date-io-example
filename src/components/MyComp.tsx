import React from "react"
import { useLocaleDateUtils } from "../context/LocalDateContextProvider"

export const MyComp = () => {
  const dateUtils = useLocaleDateUtils()

  const libDateType = dateUtils.date("2018-10-28T11:44:00.000Z")!
  const newDate = dateUtils.addDays(libDateType, 2)
  const genericDateString = dateUtils.format(libDateType, "fullDateTime")
  const genericDateStringNew = dateUtils.format(newDate, "fullDateTime")

  return (
    <>
      <h1>Hello World!</h1>
      <div>{genericDateString}</div>
      <div>{genericDateStringNew}</div>
    </>
  )
}
