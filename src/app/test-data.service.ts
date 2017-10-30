import { Injectable } from '@angular/core';
import { Position } from './interfaces/position'

@Injectable()
export class TestDataService {

  constructor() { }

  getData(): Position[] {
    return [
      { name: 'Pos1', value: 12.23, adjustment: 0, final: null },
      { name: 'Pos2', value: 12.23, adjustment: 0, final: null },
      { name: 'Pos3', value: 12.23, adjustment: 0, final: null }
    ]
  }

}
