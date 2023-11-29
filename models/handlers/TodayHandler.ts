import { Handler } from '../../abstracts/Handler';
import { dateStringified } from '../../types/dateStringified';

export class TodayHandler extends Handler {
    public processDate(date: Date): dateStringified | undefined {
        const today = new Date();

        if (today.toDateString() === date.toDateString())
            return 'Today';

        return this.successor?.processDate(date);
    }
}