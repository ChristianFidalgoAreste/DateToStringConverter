import { Handler } from "../../abstracts/Handler";
import { OldHandler } from "./OldHandler";
import { LastThirtyDaysHandler } from "./LastThirtyDaysHandler";
import { LastSevenDaysHandler } from "./LastSevenDaysHandler";
import { TodayHandler } from "./TodayHandler";
import { YesterdayHandler } from "./YesterdayHandler";

export class HandlerFactory {
    public getHandler() : Handler {
        const todayHandler = new TodayHandler();
        const yesterdayHandler = new YesterdayHandler();
        const lastSevenDaysHandler = new LastSevenDaysHandler();
        const lastThirtyDaysHandler = new LastThirtyDaysHandler();
        const oldHandler = new OldHandler();

        todayHandler.setSuccessor(yesterdayHandler);
        yesterdayHandler.setSuccessor(lastSevenDaysHandler);
        lastSevenDaysHandler.setSuccessor(lastThirtyDaysHandler);
        lastThirtyDaysHandler.setSuccessor(oldHandler);

        return todayHandler;
    }
}