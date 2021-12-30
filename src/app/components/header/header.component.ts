import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
    selector: 'app-header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {

    public currentUser: string;
    public title: string;
    public titlesOfPages: object = {
        '/login': 'Login',
        '/users-list': 'Users list',
        '/registration': 'Registration',
        '/add-user': 'Add user',
        '/edit-user': 'Edit user',
        '/control-buttons': 'Control buttons',
        '/user-details': 'User details'
    }

    constructor(private router: Router) { 
        this.router.events.subscribe((event: any) => { 
            if (event instanceof NavigationEnd && event.url === "/users-list") {          
                this.currentUser = localStorage.getItem('token');
            } 
            
            if (event instanceof NavigationEnd) {
                this.title = event.url;

                for (const [key, value] of Object.entries(this.titlesOfPages)) {
                    if (event.url.includes(key)) {
                        this.title = value;
                    }
                }  
            }
        })
    }

    ngOnInit(): void {}

    public logOut(): void {
        this.currentUser = '';
        localStorage.setItem('token', '');
    }
}
