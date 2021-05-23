import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NavComponent } from '../navcomp'

@Component({
  selector: 'app-nav-bar-w1',
  templateUrl: './nav-bar-w1.component.html',
  styleUrls: ['./nav-bar-w1.component.css']
})
export class NavBarW1Component implements OnInit {

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
  constructor() {
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
  }
}
