import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressum-w1',
  templateUrl: './impressum-w1.component.html',
  styleUrls: ['./impressum-w1.component.css']
})
export class ImpressumW1Component implements OnInit {
  name="Bieber Damm"
  address="am Fluss 1 \n 23871 Bieberhausen"
  phone="0123 465 769 12"
  email="bieber@damm.de"
  legal_info1="Handwerkskammer Fluss" 
  legal_info2="10203402345"
  constructor() { }

  ngOnInit(): void {
  }

}
