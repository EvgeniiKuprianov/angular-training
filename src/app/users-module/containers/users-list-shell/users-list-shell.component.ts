import { Component, OnInit  } from '@angular/core';
import { User } from '../../interfaces/user-interface';
import { UserStateService } from '../../services/user-state.service';


@Component({
  selector: 'users-list-shell',
  templateUrl: './users-list-shell.component.html',
  styleUrls: ['./users-list-shell.component.scss'],
})


export class UsersListShellComponent implements OnInit {
  isShowAll: boolean;
  disabledButton: boolean = this.userStateService.disabledButton;
  usersArray: User[];
  allUsers: User[];
  activeUsers: User[];

  constructor(private userStateService: UserStateService) {
  }

  ngOnInit(): void {
    this.userStateService.getIsShowAll().subscribe(isShow => this.isShowAll = isShow);
    this.userStateService.getUsers().subscribe(users => this.usersArray = users);
    this.allUsers = this.usersArray;
    this.showAndHide();
  }

  showAndHide(): void {
    this.activeUsers = this.usersArray.filter(user => user.status);
    
    if (this.isShowAll)  {
      this.usersArray = this.allUsers;
    } else {
      this.usersArray = this.activeUsers;
    }

    this.isShowAll = !this.isShowAll;
  }

  deactivatePossibleUsers() {
    this.userStateService.changeDisableFlag();
    this.userStateService.deactivateUsers();
    this.userStateService.getIsDisable().subscribe(disabled => this.disabledButton = disabled);
  }
}
