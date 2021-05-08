import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "Holzbau Bieberzahn"
  shortInfo = "Tel.: 0123 465 769 12 \n Bieberzapfenstr 7 \n 23871 Bieberhausen"
  constructor() { }

  ngOnInit(): void {
  }

}
