import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-unauth-header',
    templateUrl: './unauth-header.component.html',
    styleUrls: ['./unauth-header.component.scss']
})
export class UnauthHeaderComponent implements OnInit {

    public currentUser: string;
    constructor() {}

    ngOnInit(): void {
        this.currentUser = localStorage.getItem('token'); 
    }

    public logOut(): void {
        localStorage.setItem('token', '');
    }
}
