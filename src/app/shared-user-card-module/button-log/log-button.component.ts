import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../users-module/interfaces/user-interface';

@Component({
  selector: 'log-button',
  template: `<button (click)="showUserInformation(user)"> Logger </button>`,
  styleUrls: ['./log-button.component.scss']
})
export class LogButtonComponent implements OnInit {

  @Input() user: User;
  @Output() logger = new EventEmitter<User>();

  constructor() { }

  showUserInformation(user: User): void {
    this.logger.emit(user);
  }

  ngOnInit(): void {
  }

}
