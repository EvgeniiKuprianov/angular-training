import { Injectable } from '@angular/core';
import { User } from '../interfaces/user-interface';
import { delay, Observable, of} from 'rxjs';
import { ValidationErrors } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})

export class UserStateService {
  constructor() {}
  public user: User;
  public disabledButton: boolean = false;
  public isShowAll: boolean = true;
  public usersArray: User[] = [
    {name: 'Alex', age: 17, status: true, email: 'alex@gmail.com', 
    company: 'ISSoft', department: 'Front-end', gender: 'Male'},
    {name: 'Den', age: 22, status: false, email: 'den@gmail.com',
    company: 'ISSoft', department: 'Front-end', gender: 'Male' },
    {name: 'Leva', age: 24, status: true, email: 'leva@gmail.com',
     company: 'ISSoft', department: 'Front-end', gender: 'Male' },
    {name: 'Joe', age: 16, status: true, email: 'joe@gmail.com', 
    company: 'ISSoft', department: 'Front-end', gender: 'Male' },
    {name: 'Anna', age: 35, status: false, email: 'anna@gmail.com',
    company: 'ISSoft', department: 'Front-end', gender: 'Female' },
    {name: 'Elena', age: 27, status: true, email: 'elena@gmail.com',
     company: 'ISSoft', department: 'Front-end', gender: 'Female' },
  ];

  public getUsers(): Observable<User[]> {
    return of(this.usersArray);
  }

  public getIsShowAll(): Observable<boolean> {
    return of(this.isShowAll);
  }
 
  public getIsDisable(): Observable<boolean> {
    return of(this.disabledButton);
  }

  public changeDisableFlag(): Observable<void> {
    this.disabledButton = true;
    return of();
  }
 
  public deactivateUsers(): Observable<void> {
    this.usersArray.forEach(user => {
      if (user.age >= 18 && user.status) {
        user.status = false;
      }
    })

    return of();
  }

  public addNewUser(newUser: User): Observable<void> {
    this.usersArray.push(newUser);
    return of();
  }

  public changeUserStatus(mutableUser: User): Observable<void>  {
    this.usersArray = this.usersArray.filter(user => user!== mutableUser);
    return of();
  }

  public validateUniqueEmail(userEmail: string): Observable<ValidationErrors> {
    return new Observable<ValidationErrors> (observer => {
      const email = this.usersArray.find(user => user.email === userEmail);
      email ? observer.next({uniqueEmail: true}) : observer.next(null);
      observer.complete();
    });
  }
}
