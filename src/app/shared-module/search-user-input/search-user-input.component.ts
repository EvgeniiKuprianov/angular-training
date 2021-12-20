import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { User } from './../../users-module/interfaces/user-interface';
import { UserStateService } from './../../users-module/services/user-state.service';


@Component({
    selector: 'search-user-input',
    templateUrl: './search-user-input.component.html',
    styleUrls: ['./search-user-input.component.scss']
})
export class SearchUserInputComponent implements OnInit {

    inputSearch: FormControl = new FormControl('');
    users: User[];

    @Output() showCurrentUsers = new EventEmitter();

    constructor(private userStateService: UserStateService) { }

    ngOnInit(): void {
        this.inputSearch.valueChanges.pipe(debounceTime(500)).subscribe(searchString => this.userStateService.searchUserByName(searchString).pipe()
                .subscribe(usersArray => {
                    this.users = usersArray
                    this.showCurrentUsers.emit(this.users);
                }
            )
        ); 
    }
}
