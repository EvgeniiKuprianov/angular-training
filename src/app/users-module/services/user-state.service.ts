import { Injectable } from '@angular/core';
import { UserFromService } from '../interfaces/user-interface';
import { Observable, of, delay, map, tap } from 'rxjs';
import { ValidationErrors } from '@angular/forms';
import { HttpService } from '../services/http-client.service';


@Injectable({
    providedIn: 'root'
})

export class UserStateService {
    constructor(private httpService: HttpService) { }
    public user: UserFromService;
    public usersArray: UserFromService[];
    public disabledButton: boolean = false;
    public index: number = 0;
    public currentUser: string;

    private url: string = 'https://randomuser.me/api/';

    public getUsers(): Observable<UserFromService[]> {
        const usersPath = '?inc=gender,name,email,phone,dob,location,picture,?page=3&results=30&seed=foobar';
        
        return this.httpService.get(this.url + usersPath).pipe(
            tap((response: any) => this.setUsers(response.results)),
            map((response: any) => response.results)
        )
    }

    public searchUserByName(searchString: string): Observable<UserFromService[]> {
        const necessaryUsers = this.usersArray.filter(
            user => (user.name.first + ' ' + user.name.last).toLowerCase().includes(searchString.toLowerCase()))          

        return of(necessaryUsers)
    }

    public setUsers(usersArray: UserFromService[]): Observable<void> {
        this.usersArray = usersArray;
        return of();
    }

    public getUserById(index: number): Observable<UserFromService> {
        return of(this.usersArray[index]);
    }

    public addNewUser(newUser: UserFromService): Observable<void> {
        this.usersArray.push(newUser);

        // this.httpService.post(this.url, this.usersArray);     
        return of();
    }

    public changeUserData(newUserData: UserFromService, userId: number): Observable<void> {
        this.usersArray[userId] = newUserData

        // this.httpService.post(this.url, this.usersArray);
        return of()
    }

    public getIsDisable(): Observable<boolean> {
        return of(this.disabledButton);
    }

    public changeDisableFlag(): Observable<void> {
        this.disabledButton = true;
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
