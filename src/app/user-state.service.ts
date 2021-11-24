import { Injectable } from '@angular/core';
import { User } from './user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  constructor() {}
  public user: User;
  public isShowAll: boolean = true;
  public usersArray: User[] = [
    {'name': 'Alex', 'age': 17, 'status': true, 'id': 1},
    {'name': 'Den', 'age': 22, 'status': false, 'id': 2, 'carInformation': {
      'brand': 'Ford',
      'number': '1552'
    }},
    {'name': 'Leva', 'age': 24, 'status': true, 'id': 3},
    {'name': 'Joe', 'age': 16, 'status': true, 'id': 4},
    {'name': 'Anna', 'age': 35, 'status': false, 'id': 13, 'carInformation': {
      'brand': 'Opel',
      'number': '1122'
    }},
    {'name': 'John', 'age': 31, 'status': true, 'id': 5, 'carInformation': {
      'brand': 'BMW',
      'number': '2345'
    }},
    {'name': 'Anna', 'age': 17, 'status': true, 'id': 6},
    {'name': 'Helen', 'age': 18, 'status': true, 'id': 7, 'carInformation': {
      'brand': 'Peugeot',
      'number': '4532'
    }},
    {'name': 'Helena', 'age': 20, 'status': true, 'id': 8},
    {'name': 'Lev', 'age': 18, 'status': true, 'id': 9},
    {'name': 'Vlad', 'age': 22, 'status': true, 'id': 10, 'carInformation': {
      'brand': 'BMW',
      'number': '5543'
    }},
    {'name': 'Jim', 'age': 34, 'status': true, 'id': 11},
    {'name': 'Denver', 'age': 16, 'status': true, 'id': 12},
    {'name': 'Anna', 'age': 35, 'status': false, 'id': 13, 'carInformation': {
      'brand': 'Opel',
      'number': '1122'
    }},
    {'name': 'Anna', 'age': 35, 'status': true, 'id': 14},
    {'name': 'Anna', 'age': 35, 'status': false, 'id': 15},
  ];

  public changeUserStatus(mutableUser: User): void {       
    this.usersArray = this.usersArray.filter(user => user.id !== mutableUser.id)
  }
}
