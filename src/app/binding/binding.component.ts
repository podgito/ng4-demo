import { Component, OnInit } from '@angular/core';
import { TestDataService} from '../test-data.service';
@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  adjustment: number = 0;
  data: Position[];
  constructor(private dataService: TestDataService) { }

  ngOnInit() {
    //this.data = this.dataService.getData();
  }

}
