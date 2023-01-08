import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  titleImage: string = "Title image"

  imageBigCard: string = "src\app\images\download.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
