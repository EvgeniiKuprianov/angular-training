import { Injectable } from '@angular/core';
import { UserFromService } from '../interfaces/user-interface';
import { Observable, of, delay } from 'rxjs';
import { ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class UserStateService {
    constructor(private http: HttpClient) { }
    public user: UserFromService;
    public usersArray: UserFromService[] = [];
    public disabledButton: boolean = false;
    public response: any;
    public index: number = 0;

    public searchUserByName(searchString: string): Observable<UserFromService[]> {
        let necessaryUsers: UserFromService[]

        this.getUsersFromServer().pipe().subscribe(val => necessaryUsers = val.filter(
            user => (user.name.first + ' ' + user.name.last).toLowerCase().includes(searchString.toLowerCase())))
      
        return of(necessaryUsers)
    }

    public getUsersFromServer(): Observable<UserFromService[]> {
        this.http
            .get<Response>('https://randomuser.me/api/?inc=gender,name,email,phone,dob,location,picture,?page=3&results=30&seed=foobar')
            .subscribe(data => {
                this.response = data;
                this.response.results.map((user, index) => {
                    user.status = true;
                    user.id = index;
                });
                this.setUsers(this.response.results)            
        });

        return of (this.usersArray);
    }

    public sendUsersToServer(usersArray: UserFromService) {
        return this.http.post('https://randomuser.me/api/sendUsers', usersArray); 
    }

    public setUsers(usersArray: UserFromService[]): Observable<void> {
        this.usersArray = usersArray; 
        return of();       
    }

    public getUserById(index: number): Observable<UserFromService> {
        const user = this.usersArray[index];
        return of(user);
    }

    public getIsDisable(): Observable<boolean> {
        return of(this.disabledButton);
    }

    public changeDisableFlag(): Observable<void> {
        this.disabledButton = true;
        return of();
    }

    public addNewUser(newUser: UserFromService): Observable<void> {
        this.usersArray.push(newUser);
        return of();
    }

    public changeUserData(newUserData: UserFromService, userId: number) {
        this.getUsersFromServer().pipe()
            .subscribe(data => {
                data[userId] = newUserData
                this.setUsers(data)
            })
    }

    public changeUserStatus(mutableUser: UserFromService): Observable<void> {   
        this.changeUserData(mutableUser, mutableUser.id);
        return of();
    }

    public validateUniqueEmail(userEmail: string): Observable<ValidationErrors> {
        return new Observable<ValidationErrors>(observer => {
            const email = this.usersArray.find(user => user.email === userEmail);
            email ? observer.next({ uniqueEmail: true }) : observer.next(null);
            observer.complete();
        });
    }

    public getIndex(): Observable<number> {
        return of(this.index).pipe(delay(this.randomInteger(3000, 6000)));
    }

    public changeIndex(): Observable<number> {
        return of(this.index++);
    }

    public randomInteger(min: number, max: number): number {
        let rand = min + Math.random() * (max - min);
        return Math.round(rand);
    }
}
