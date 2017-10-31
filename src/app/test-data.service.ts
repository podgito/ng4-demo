import { Injectable } from '@angular/core';
import { DataPoint } from './interfaces/data-point'

@Injectable()
export class TestDataService {

  constructor() { }

  getData(): DataPoint[] {
    return [
      { name: 'Pos1', value: 12.23, adjustment: 0, final: null },
      { name: 'Pos2', value: 12.23, adjustment: 0, final: null },
      { name: 'Pos3', value: 12.23, adjustment: 0, final: null }
    ]
  }

}
