import { Handler } from '../../abstracts/Handler';
import { dateStringified } from '../../types/dateStringified';

export class YesterdayHandler extends Handler {
    public processDate(date: Date): dateStringified | undefined {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        
        if (yesterday.toDateString() === date.toDateString())
            return 'Yesterday';

        return this.successor?.processDate(date);
    }
}