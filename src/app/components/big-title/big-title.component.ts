import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-title',
  templateUrl: './big-title.component.html',
  styleUrls: ['./big-title.component.css']
})
export class BigTitleComponent implements OnInit {

  bigTitle: string = "My Blog"

  constructor() { }

  ngOnInit(): void {
  }

}
