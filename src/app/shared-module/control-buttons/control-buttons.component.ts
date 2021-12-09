import { Component, OnInit } from '@angular/core';
import { UserStateService } from 'src/app/users-module/services/user-state.service';
import { switchMap, Subject, concatMap, first, take } from 'rxjs';



@Component({
    selector: 'app-control-buttons',
    templateUrl: './control-buttons.component.html',
    styleUrls: ['./control-buttons.component.scss']
})
export class ControlButtonsComponent implements OnInit {

    activeIndex$ = new Subject();

    constructor(private userStateService: UserStateService) { }

    ngOnInit(): void {    
        this.activeIndex$.pipe(
            switchMap(() => this.userStateService.getIndex()),
        )
        .subscribe(data => console.log(data));     
    }

    public lastValue() {
        this.activeIndex$.next(this.userStateService.changeIndex())
    }

    public withoutOrder() {
        this.userStateService.changeIndex()
        this.userStateService.getIndex()
        .subscribe(data => console.log(data))
    }

    public withOrder() {
        this.userStateService.getIndex().pipe(
            concatMap(() => this.userStateService.changeIndex())
        )
        .subscribe(data => console.log(data))
    }

    public firstValue() {
        this.userStateService.getIndex().pipe(
            first()
        )
        .subscribe(data => console.log(data))
    }
}