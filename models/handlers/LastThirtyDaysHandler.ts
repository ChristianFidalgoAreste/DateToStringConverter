import { Handler } from '../../abstracts/Handler';
import { dateStringified } from '../../types/dateStringified';

export class LastThirtyDaysHandler extends Handler {
    public processDate(date: Date): dateStringified | undefined {
        const today = new Date();
        const lastWeek = new Date(today);
        lastWeek.setDate(today.getDate() - 30);

        if (lastWeek.getTime() <= date.getTime())
            return 'Last 30 days';

        return this.successor?.processDate(date);
    }    
}