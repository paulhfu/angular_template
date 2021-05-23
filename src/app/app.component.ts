import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSticky: boolean = false;
  screenHeight: number = 0;
  screenWidth: number = 0;
  screensize: string = 'large';

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        if(this.screenWidth < 400)
        {
            this.screensize = 'small';
        }
        else if(this.screenWidth < 800)
        {
            this.screensize = 'med'
        }
        else
        {
            this.screensize = 'large'
        }
        this.reloadCurrentRoute()
  }
  constructor(private _router: Router,) {
    this.getScreenSize();
  }
  reloadCurrentRoute() {
    let currentUrl = this._router.url;
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this._router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }
}
//firefox -start-debugger-server