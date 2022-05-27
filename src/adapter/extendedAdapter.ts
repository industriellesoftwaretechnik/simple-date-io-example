import { IUtils } from "@date-io/core/IUtils";
import DateFnsUtils from "@date-io/date-fns";
import endOfWeek from "date-fns/endOfWeek";

export interface CustomUtils<TDate> extends IUtils<TDate> {
  getWeekArray(date: TDate): TDate[][];
  sayHello(): void;
}

export const createMyAdapter = (options?: DateFnsUtils): CustomUtils<Date> => {
  const dateFns = new DateFnsUtils(options);

  const adapter = {
    ...dateFns,
    sayHello() {
      console.log("Hello");
    },

    getWeekArray(date: Date) {
      console.log("My Impl");
      const startDate = endOfWeek(adapter.endOfMonth(date), {
        locale: adapter.locale,
      });
      const extraWeek = adapter
        .getWeekdays()
        .map((_day, index) => adapter.addDays(startDate, index + 1));
      return [...dateFns.getWeekArray(date), extraWeek];
    },
  };

  return adapter;
};
