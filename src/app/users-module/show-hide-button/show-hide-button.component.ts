import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'show-hide-button',
  template: `<button> {{ isShowAll ? 'Show all users' : 'Hide non-active users'}} </button>`,
  styleUrls: ['./show-hide-button.component.scss']
})
export class ShowHideButtonComponent implements OnInit {

  @Input() isShowAll: boolean; 

  constructor() { }

  ngOnInit(): void {
  }

}
