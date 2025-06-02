import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  //firstName:string=""

  log(model:NgModel){console.log(model.value)}

  constructor() { }

  ngOnInit(): void {
  }

}
