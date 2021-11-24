import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from '../../user-interface';
import { ButtonStatusShellComponent } from '../button-status-shell/button-status-shell.component';


@Component({
  selector: 'user-card',
  templateUrl: './user-card-shell.component.html',
  styleUrls: ['./user-card-shell.component.scss']
})
export class UserCardShellComponent implements OnInit {
  @ViewChild(ButtonStatusShellComponent)
  private changeButtonStatus: ButtonStatusShellComponent;
  
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
