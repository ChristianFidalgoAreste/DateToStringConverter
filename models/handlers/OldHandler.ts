import { Handler } from '../../abstracts/Handler';
import { dateStringified } from '../../types/dateStringified';

export class OldHandler extends Handler {
    public processDate(date: Date): dateStringified | undefined {
        return 'Old';
    }    
}