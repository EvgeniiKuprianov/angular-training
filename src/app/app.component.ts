import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
})
export class AppComponent {
    constructor(private router: Router) { 
        this.router.events.subscribe((event: any) => { 
            if (event instanceof NavigationEnd) {
                    console.log(event.url);
            }
        })
    }

    ngOnInit(): void {
    }

}
