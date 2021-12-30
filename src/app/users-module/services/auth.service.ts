import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    public userId: string = null;

    constructor(){}
}