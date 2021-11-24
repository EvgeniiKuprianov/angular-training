import { Component, OnInit, ViewChild  } from '@angular/core';
import { User } from '../../user-interface';
import { UserStateService } from '../../user-state.service';
import { DeactivateButtonShellComponent } from '../deactivate-button-shell/deactivate-button-shell.component'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})


export class UsersListComponent implements OnInit {
  @ViewChild(DeactivateButtonShellComponent)
  private deactivator: DeactivateButtonShellComponent

  isShowAll: boolean = this.userStateService.isShowAll;
  usersArray: User[] = this.userStateService.usersArray;
  allUsers: User[] = this.usersArray;
  activeUsers: User[];

  constructor(private userStateService: UserStateService) {
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

  deactivateUsers(): void {
    this.deactivator.deactivatePossibleUsers(this.usersArray);
  }

  ngOnInit(): void {
    this.showAndHide();
  }
}
