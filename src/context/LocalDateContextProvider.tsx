import { IUtils } from "@date-io/core/IUtils";
import { DateTime } from "luxon";
import DateIoAdapter from "@date-io/luxon";
//import DateIoAdapter from "@date-io/date-fns";
import React from "react";

type CurrentDateType = DateTime;

const localeContext = React.createContext<IUtils<CurrentDateType> | null>(null);

const LocalDateContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const dateUtils = React.useMemo(() => new DateIoAdapter(), []);

  return (
    <localeContext.Provider value={dateUtils}>
      {children}
    </localeContext.Provider>
  );
};

const useLocaleDateUtils = () => {
  const context = React.useContext(localeContext);

  if (context == null) throw new Error("Use in LocalDateContextProvider");

  return context;
};

export { LocalDateContextProvider, useLocaleDateUtils };
