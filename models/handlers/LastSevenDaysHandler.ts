import { Handler } from '../../abstracts/Handler';
import { dateStringified } from '../../types/dateStringified';

export class LastSevenDaysHandler extends Handler {
    public processDate(date: Date): dateStringified | undefined {
        const today = new Date();
        const lastWeek = new Date(today);
        lastWeek.setDate(today.getDate() - 7);

        if (lastWeek.getTime() <= date.getTime())
            return 'Last 7 days';

        return this.successor?.processDate(date);
    }    
}