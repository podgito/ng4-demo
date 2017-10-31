import { Component, OnInit } from '@angular/core';
import { TestDataService} from '../test-data.service';
import {DataPoint} from '../interfaces/data-point'
@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  adjustment: number = 0;
  dataPoints: DataPoint[];
  constructor(private dataService: TestDataService) { }

  ngOnInit() {
    this.dataPoints = this.dataService.getData();
  }

}
