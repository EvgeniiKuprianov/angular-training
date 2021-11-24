import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../interfaces';


@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  
  @Input() user: User 
  @Input() index: number;
  @Input() isShowAll: boolean; 
  
  @Output() buttonClick = new EventEmitter();

  constructor() { }
  
  public changeStatus(index: number): void {       
    if (this.isShowAll) {
      this.buttonClick.emit(index);
    }

    this.user.status = false;
  }

  ngOnInit(): void {
  }

}
