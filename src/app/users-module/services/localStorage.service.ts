import { Injectable } from "@angular/core";
import { IClient } from "../interfaces/user-interface";


@Injectable({
    providedIn: 'root'
})

export class LocalStorageService {

    constructor(){}

    addRegisteredUser(client: IClient) {
        localStorage.setItem(client.login, client.password);
    }

    signIn(clientLogin: string) {
        localStorage.setItem('token', clientLogin);
    }

    checkAvailabilityUser(clientLogin: string) {
        const answerIncluding = Object.keys(localStorage).includes(clientLogin);
        return answerIncluding;
    }

    checkPassword(clientLogin: string){
        return localStorage[clientLogin];
    }
}