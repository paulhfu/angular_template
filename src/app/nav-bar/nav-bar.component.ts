import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../navcomp'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  about: NavComponent = {
    id: "über uns",
    link: 5
  }
  services: NavComponent = {
    id: "leistungen",
    link: 5
  };
  galery: NavComponent = {
    id: "galerie",
    link: 5
  };
  contact: NavComponent = {
    id: "kontakt",
    link: 5
  };
  constructor() { }

  ngOnInit(): void {
  }

}
