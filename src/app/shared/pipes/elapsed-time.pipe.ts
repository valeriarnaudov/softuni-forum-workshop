import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'elapsedTime',
})
export class ElapsedTimePipe implements PipeTransform {
  transform(dataString: string): string {
    return moment(dataString).fromNow();
  }
}
