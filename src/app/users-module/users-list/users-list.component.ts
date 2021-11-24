import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {
  titleButton: string = 'Hide non-active users';
  user: User;
  isShowAll: boolean = true;
  usersArray: User[] = [
    {'name': 'Alex', 'age': 27, 'status': true},
    {'name': 'Den', 'age': 22, 'status': false},
    {'name': 'Leva', 'age': 24, 'status': true},
    {'name': 'Joe', 'age': 29, 'status': true},
    {'name': 'John', 'age': 31, 'status': true},
    {'name': 'Anna', 'age': 35, 'status': true},
    {'name': 'Helen', 'age': 20, 'status': true},
    {'name': 'Helena', 'age': 20, 'status': true},
    {'name': 'Lev', 'age': 20, 'status': false},
    {'name': 'Vlad', 'age': 22, 'status': true},
    {'name': 'Jim', 'age': 34, 'status': true},
    {'name': 'Denver', 'age': 28, 'status': false},
    {'name': 'Anna', 'age': 35, 'status': false},
    {'name': 'Anna', 'age': 35, 'status': true},
    {'name': 'Anna', 'age': 35, 'status': false},
  ];

  allUsers: User[] = this.usersArray;
  activeUsers: User[];

  constructor() {
  }

  showAndHide(): void {     
    this.activeUsers = this.usersArray.filter(user => user.status);
    
    if (this.isShowAll)  {
      this.usersArray = this.allUsers;
    } else {
      this.usersArray = this.activeUsers;
    }
    this.isShowAll = !this.isShowAll;
  }

  handleChangeStatus(index: number): void {    
    this.usersArray = this.usersArray.filter((user, i) => i !== index)
  }

  ngOnInit(): void {
    this.showAndHide();
  }
}
