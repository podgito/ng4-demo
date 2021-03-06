import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  @Input() name: String;
  @Input() greeting: String;

  constructor() { }

  ngOnInit() {
  }

}
