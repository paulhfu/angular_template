import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  imageObject: Array<object> = [{
      image: '../../assets/img/031.jpg',
      thumbImage: '../../assets/img/031-s190x90.jpg',
      alt: 'Image 1',
      title: 'Image 1'
    }, {
      image: '../../assets/img/032.jpg',
      thumbImage: '../../assets/img/032-s190x90.jpg',
      title: 'Image 2',
      alt: 'Image 2'
    }, {
      image: '../../assets/img/033.jpg',
      thumbImage: '../../assets/img/033-s190x90.jpg',
      title: 'Image 3',
      alt: 'Image 3'
    }, {
      image: '../../assets/img/034.jpg',
      thumbImage: '../../assets/img/034-s190x90.jpg',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: '../../assets/img/035.jpg',
      thumbImage: '../../assets/img/035-s190x90.jpg',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: '../../assets/img/037.jpg',
      thumbImage: '../../assets/img/037-s190x90.jpg',
      title: 'Image 6',
      alt: 'Image 6'
    },{
      image: '../../assets/img/038.jpg',
      thumbImage: '../../assets/img/038-s190x90.jpg',
      title: 'Image 7',
      alt: 'Image 7'
    },{
      image: '../../assets/img/039.jpg',
      thumbImage: '../../assets/img/039-s190x90.jpg',
      title: 'Image 8',
      alt: 'Image 8'
    },{
      image: '../../assets/img/040.jpg',
      thumbImage: '../../assets/img/040-s190x90.jpg',
      title: 'Image 9',
      alt: 'Image 9'
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
