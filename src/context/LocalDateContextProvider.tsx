import { IUtils } from "@date-io/core/IUtils";
import { DateTime } from "luxon";
import DateIoAdapter from "@date-io/luxon";
import { createMyAdapter, CustomUtils } from "../adapter/extendedAdapter";
// import DateIoAdapter from "@date-io/date-fns";
import React from "react";

// type CurrentDateType = Date;
type CurrentDateType = DateTime;

const LocaleContext = React.createContext<
  IUtils<CurrentDateType> | CustomUtils<CurrentDateType> | null
>(null);

const LocalDateContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  //const dateUtils = React.useMemo(() => createMyAdapter(), []);
  const dateUtils = React.useMemo(() => new DateIoAdapter(), []);

  return (
    <LocaleContext.Provider value={dateUtils}>
      {children}
    </LocaleContext.Provider>
  );
};

const useLocaleDateUtils = () => {
  const context = React.useContext(LocaleContext);

  if (context == null) throw new Error("Use in LocalDateContextProvider");

  return context;
};

export { LocalDateContextProvider, useLocaleDateUtils };
