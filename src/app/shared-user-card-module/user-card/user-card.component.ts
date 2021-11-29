import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from '../../users-module/interfaces/user-interface';
import { ButtonStatusComponent } from '../button-status/button-status.component';


@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @ViewChild(ButtonStatusComponent)
  private changeButtonStatus: ButtonStatusComponent;
  
  @Input() user: User;

  constructor() { }

  logger(user: User) {
    console.log(user);
  }

  changeStatus(user: User): void {
    this.changeButtonStatus.changeStatus(user);
  }
  
  ngOnInit(): void {
  }

}
