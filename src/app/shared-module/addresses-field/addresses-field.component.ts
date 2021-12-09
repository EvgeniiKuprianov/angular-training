import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
    selector: 'addresses-field',
    templateUrl: './addresses-field.component.html',
    styleUrls: ['./addresses-field.component.scss']
})
export class AddressesFieldComponent implements OnInit {

    @Input() parentFormGroup: FormGroup;

    addressForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.parentFormGroup.addControl('addressField', new FormArray([this.createAddressesField()]))
        this.addressForm.controls['address']
            .valueChanges
            .subscribe(data => this.zipCodeValidation(data))
    }

    public get addressesArray(): any {
        return (this.parentFormGroup.get('addressField') as FormArray).controls;
    }

    public createAddressesField(): FormGroup {
        return this.addressForm = this.formBuilder.group({
            city: [''],
            zipCode: [{ value: '', disabled: true }],
            address: ['', Validators.required],
        })
    }

    public addAddress(): void {
        this.addressesArray.push(this.createAddressesField());
    }

    public removeAddress(index: number): void {
        if (this.addressesArray.length > 1) {
            this.addressesArray.splice(index, 1);
        }
    }

    public zipCodeValidation(addressValue: string): void {
        const zipCodeControl = this.addressForm.controls['zipCode'];

        if (addressValue.length) {
            zipCodeControl.enable();
            zipCodeControl.setValidators(Validators.required)
            zipCodeControl.updateValueAndValidity();
        } else {
            zipCodeControl.clearValidators();
            zipCodeControl.disable();
            zipCodeControl.patchValue('');
        }
    }
}

