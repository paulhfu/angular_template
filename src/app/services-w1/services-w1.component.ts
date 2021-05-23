import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-w1',
  templateUrl: './services-w1.component.html',
  styleUrls: ['./services-w1.component.css']
})
export class ServicesW1Component implements OnInit {
  servicesText = "Lorem ipsum dolorest laborum."
  constructor() { }
  ngOnInit(): void {
  }
}
