import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFromService } from './../../users-module/interfaces/user-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStateService } from '../../users-module/services/user-state.service';




@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

    public user$: Observable<UserFromService>;
    public userId: number;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userStateService: UserStateService) { }

    ngOnInit(): void {
        this.route.params.subscribe(data => {
            this.userId = data['id'];
            this.user$ = this.userStateService.getUserById(this.userId);
        }); 
        
        this.user$.subscribe(data => console.log(data))
    }

}
