import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserFromService } from '../../interfaces/user-interface';
import { UserStateService } from '../../services/user-state.service';

@Component({
  selector: 'app-user-contacts-shell',
  templateUrl: './user-contacts-shell.component.html',
  styleUrls: ['./user-contacts-shell.component.scss']
})
export class UserContactsShellComponent implements OnInit {

    public user$: Observable<UserFromService>;
    public userId: number;

    constructor(
        private route: ActivatedRoute,
        private userStateService: UserStateService) {}

    ngOnInit(): void {
        this.route.params
            .subscribe(data => {  
                this.userId = data['id'];
                this.user$ = this.userStateService.getUserById(this.userId);
        });
    }

}
