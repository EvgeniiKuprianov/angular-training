import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user-interface';


@Component({
  selector: 'deactivate-button',
  template: `<button [disabled]="disableButton">Deactivate all possible users</button>`,
  styleUrls: ['./deactivate-button-shell.component.scss']
})
export class DeactivateButtonShellComponent implements OnInit {

  disableButton: boolean = false;

  constructor() { }

  deactivatePossibleUsers(usersArray: User[]): void{
    usersArray.forEach(user => {
      if (user.age >= 18 && user.status) {
        user.status = false;
      }
    })

    this.disableButton = true;
  }

  ngOnInit(): void {
  }

}
