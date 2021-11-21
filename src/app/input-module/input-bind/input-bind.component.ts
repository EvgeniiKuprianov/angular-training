import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'input-bind',
  templateUrl: './input-bind.component.html',
  styleUrls: ['./input-bind.component.scss']
})

export class InputBindComponent implements OnInit {
  userName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
