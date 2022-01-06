import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UserFromService } from 'src/app/users-module/interfaces/user-interface';
import { UserStateService } from 'src/app/users-module/services/user-state.service';
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort'



@Component({
    selector: 'app-user-table',
    templateUrl: './user-table.component.html',
    styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements AfterViewInit {
   
    public displayedColumns: string[] = ['Full name', 'E-mail', 'Age', 'Country', 'City'];
    public dataSource: any = [];

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
        
    constructor(private userStateService: UserStateService) {}

    ngAfterViewInit(): void {
        this.userStateService.getUsers().subscribe(users => {
            this.dataSource  = new MatTableDataSource<UserFromService>(users);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
}
