import { Pipe, PipeTransform } from '@angular/core';
import { DataPoint } from '../interfaces/data-point';

@Pipe({
  name: 'dataPointFilter'
})
export class DataPointFilterPipe implements PipeTransform {

  transform(dataPoints: DataPoint[], searchTerm: string): DataPoint[] {
    if(searchTerm) return dataPoints.filter(p => p.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0);
    return dataPoints;
  }

}
