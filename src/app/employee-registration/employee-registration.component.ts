import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { NameValidators } from './name.validator';

@Component({
  selector: 'employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit {
  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        NameValidators.cannotContainSpace 
        
      ], NameValidators.nameShouldbeUnique],
      age: ['', [Validators.required, Validators.min(18), Validators.max(65)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{3}-\d{3}-\d{4}$/)]],
      department: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', [Validators.required, Validators.pattern(/^[A-Z]{2}$/)]],
        zipCode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]]
      })
    });
    
  }

  get name(){
      
    return this.employeeForm.get('name');
  }
  

  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log('Form Submitted:', this.employeeForm.value);
    } else {
      this.employeeForm.markAllAsTouched();
    }
  }

}
