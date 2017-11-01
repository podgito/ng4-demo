import { Injectable } from '@angular/core';
import { DataPoint } from './interfaces/data-point'

@Injectable()
export class TestDataService {

  constructor() { }

  getData(): DataPoint[] {
    return [
      { name: 'Bond1', value: 12.23, adjustment: 0, final: null },
      { name: 'Bond2', value: 12.23, adjustment: 0, final: null },
      { name: 'Cash1', value: 12.23, adjustment: 0, final: null },
      { name: 'Bond3', value: 12.23, adjustment: 0, final: null }
      
    ]
  }

}
