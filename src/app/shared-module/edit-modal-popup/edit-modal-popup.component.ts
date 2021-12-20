import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'edit-modal-popup',
    templateUrl: './edit-modal-popup.component.html',
    styleUrls: ['./edit-modal-popup.component.scss']
})
export class EditModalPopupComponent implements OnInit {

    public changedFields: string[];

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
        this.changedFields = [];
        this.data.map(obj => {
            for (let [key, value] of Object.entries(obj)) {                
                let string = `Field ${key} has unsaved value: ${value}`;
                this.changedFields.push(string);
            }
        })

        console.log(this.changedFields);

    }
}
