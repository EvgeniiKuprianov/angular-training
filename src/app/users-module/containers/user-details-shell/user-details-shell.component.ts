import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-details-shell',
  templateUrl: './user-details-shell.component.html',
  styleUrls: ['./user-details-shell.component.scss']
})
export class UserDetailsShellComponent implements OnInit {

    public userId: number;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params
            .subscribe(data => {  
                this.userId = data['id'];
        });   
    }
}
