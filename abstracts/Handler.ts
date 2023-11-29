import { dateStringified } from "../types/dateStringified";

export abstract class Handler {
    protected successor : Handler | undefined;

    public abstract processDate(date : Date) : dateStringified | undefined;

    public setSuccessor(handler : Handler) : void {
        this.successor = handler;
    };
}