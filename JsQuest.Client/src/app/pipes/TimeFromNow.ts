import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'timeFromNow' })
export default class TimeFromNowPipe implements PipeTransform {
    transform(value: Date) {
        return moment(value).fromNow();
    }
}
