import { Injectable } from '@angular/core';
import { EditUserShellComponent } from './../containers/edit-user-shell/edit-user-shell.component';
import { CanDeactivate } from "@angular/router";
import { Observable } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { EditModalPopupComponent } from 'src/app/shared-module/edit-modal-popup/edit-modal-popup.component';


@Injectable({ providedIn: 'root' })

export class ExitEditUserGuard implements CanDeactivate<EditUserShellComponent>{
    public changesForm = []

    constructor(public dialog: MatDialog) {}

    canDeactivate(component: EditUserShellComponent) : Observable<boolean> | boolean{        
        if (component.isSubmitted) {
            return true;
        } else {
            for (let [oldKey, oldValue] of Object.entries(component.userForm.oldUserData)) {
                for (let [newKey, newValue] of Object.entries(component.userForm.userForm.value)) {
                    if (oldKey === newKey && oldValue !== newValue) {
                        if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {                                                        
                            const obj: object = {}
                            obj[newKey] = newValue;
                            this.changesForm.push(obj)
                        }
                    }
                }
            }
            if (this.changesForm.length) {               
                let dialogPopup =  this.dialog.open(EditModalPopupComponent, {data: this.changesForm});
                this.changesForm = [];
                return dialogPopup.afterClosed()
            } else {
                return true;
            }
        }
    }
}