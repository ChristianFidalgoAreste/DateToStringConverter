import { dateStringified } from "../types/dateStringified";

export class DateToStringConverter {
    public transformDateToString(date : Date) : dateStringified {
        const today = new Date();
        
        const dayOfTheWeek = this.getNameOfTheDay(date.getDay());
        const monthOfTheYear = this.getNameOfTheMonth(date.getMonth());
        const yearStringFormat = today.getFullYear() === date.getFullYear() ? '' : ` of ${date.getFullYear()}`;

        return `${dayOfTheWeek}, ${date.getDate()} of ${monthOfTheYear}${yearStringFormat}`;
    }

    private getNameOfTheDay(day : number) : string {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        return dayNames[day];
    }

    private getNameOfTheMonth(month : number) : string {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        return monthNames[month];
    }
}