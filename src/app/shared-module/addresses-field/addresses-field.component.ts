import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'addresses-field',
  templateUrl: './addresses-field.component.html',
  styleUrls: ['./addresses-field.component.scss']
})
export class AddressesFieldComponent implements OnInit {

  @Input() parentFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.parentFormGroup.addControl('addressField', new FormArray([this.createAddressesField()]))
  }

  public get addressesArray(): any {
    return(this.parentFormGroup.get('addressField') as FormArray).controls;
  }

  public createAddressesField(): FormGroup {
    return this.formBuilder.group({
      city: [''],
      zipCode: [{ value: '', disabled: true }],
      address: ['', Validators.required],
    }, { validator: this.zipCodeValidation })
  }

  public addAddress(): void {
    this.addressesArray.push(this.createAddressesField());
  }
  
  public removeAddress(index: number): void {
    if (this.addressesArray.length > 1) {
      this.addressesArray.splice(index, 1);
    }
  }

  public zipCodeValidation(group: FormGroup): void {   
    const zipCodeControl = group.controls['zipCode']; 
    const address = group.controls['address'];   

    if (address.value.length > 0 && zipCodeControl.disabled) {
      zipCodeControl.setValidators(Validators.required)
      zipCodeControl.enable();
      zipCodeControl.updateValueAndValidity();
    } else if (address.value.length === 0 && !zipCodeControl.disabled) {
      zipCodeControl.clearValidators();
      zipCodeControl.disable();
    }
  } 
}
