import React from "react";
import { useLocaleDateUtils } from "../context/LocalDateContextProvider";

export const MyComp = () => {
  const dateUtils = useLocaleDateUtils();

  const libDateType = dateUtils.date("2022-05-27T11:44:00.000Z")!;
  const newDate = dateUtils.addDays(libDateType, 2);
  const genericDateString = dateUtils.format(libDateType, "fullDateTime");
  const genericDateStringNew = dateUtils.format(newDate, "fullDateTime");
  const locale = dateUtils.getCurrentLocaleCode();

  dateUtils.getWeekArray(libDateType);
  if ("sayHello" in dateUtils) dateUtils.sayHello();

  return (
    <>
      <h1>Hello World!</h1>
      <div>Locale: {locale}</div>
      <div>Date: {genericDateString}</div>
      <div>Date plus two Days: {genericDateStringNew}</div>
    </>
  );
};
