import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'addresses-field',
    templateUrl: './addresses-field.component.html',
    styleUrls: ['./addresses-field.component.scss']
})
export class AddressesFieldComponent implements OnInit {

    @Input() parentFormGroup: FormGroup;

    public addressForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.parentFormGroup.addControl('location', new FormArray([this.createAddressesField()]))
        this.addressForm.controls['city']
            .valueChanges
            .subscribe(data => this.zipCodeValidation(data))
    }

    public get addressesArray(): any {
        return (this.parentFormGroup.get('location') as FormGroup).controls;
    }

    public createAddressesField(): FormGroup {
        return this.addressForm = this.formBuilder.group({
            country: [''],
            city: ['', Validators.required],
            postcode: [{ value: '', disabled: true }],
            state: [''],
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
        const postCodeControl = this.addressForm.controls['postcode'];

        if (addressValue.length) {
            postCodeControl.enable();
            postCodeControl.setValidators(Validators.required)
            postCodeControl.updateValueAndValidity();
        } else {
            postCodeControl.clearValidators();
            postCodeControl.disable();
            postCodeControl.patchValue('');
        }
    }
}

