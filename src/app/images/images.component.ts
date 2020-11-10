import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myimage1:string = " assets/images/1.png";
  myimage2:string = " assets/images/2.png";
  myimage3:string = " assets/images/3.jpg";

}

