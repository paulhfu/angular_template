import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-w1',
  templateUrl: './header-w1.component.html',
  styleUrls: ['./header-w1.component.css']
})
export class HeaderW1Component implements OnInit {
  title = "Holzbau Bieberzahn"
  shortInfo = "Tel.: 0123 465 769 12 \n Bieberzapfenstr 7 \n 23871 Bieberhausen"
  constructor() { }

  ngOnInit(): void {
  }

}
