import { Handler } from "../abstracts/Handler";
import { dateStringified } from "../types/dateStringified";
import { HandlerFactory } from "./handlers/HandlerFactory";

export class DateToStringConverter {
    private handlerFactory : HandlerFactory;

    public constructor (handlerFactory : HandlerFactory) {
        this.handlerFactory = handlerFactory;
    }

    public transformDateToString(date : Date) : dateStringified | undefined {
        const handler = this.handlerFactory.getHandler();

        return handler.processDate(date);
    }
}