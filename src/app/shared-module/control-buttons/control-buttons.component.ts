import { Component, OnInit } from '@angular/core';
import { UserStateService } from 'src/app/users-module/services/user-state.service';
import { switchMap, Subject, concatMap, exhaustMap } from 'rxjs';



@Component({
    selector: 'app-control-buttons',
    templateUrl: './control-buttons.component.html',
    styleUrls: ['./control-buttons.component.scss']
})
export class ControlButtonsComponent implements OnInit {

    activeIndex = new Subject();

    firstIndex = new Subject();


    constructor(private userStateService: UserStateService) { }

    ngOnInit(): void {
        this.activeIndex.pipe(
            switchMap(() => this.userStateService.getIndex())            
                )
            .subscribe(index => console.log(index));
    
        this.firstIndex.pipe(
                exhaustMap(() => this.userStateService.getIndex())
            )
            .subscribe(index => console.log(index));
            
    }

    ngOnDestroy(): void {
        this.userStateService.getIndex()
    }

    public refresh() {
        this.userStateService.changeIndex();
        this.activeIndex.next(null);
    }

    public export() {
        this.userStateService.changeIndex()
        this.userStateService.getIndex().pipe() 
        .subscribe(index => console.log(index));
    }

    public save() {
        this.userStateService.getIndex().pipe (
            concatMap(() => this.userStateService.changeIndex())
        )
        .subscribe(index => console.log(index)); 
    }

    public firstValue() {
        this.userStateService.changeIndex();
        this.firstIndex.next(null);
    }
}