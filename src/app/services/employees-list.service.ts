import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesListService {

  private employees = [
    {
      id: 1,
      name: 'Alice Johnson',
      age: 29,
      email: 'alice.johnson@example.com',
      phoneNumber: '123-456-7890',
      department: 'Engineering',
      address: {
        street: '123 Main St',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94101'
      }
    },
    {
      id: 2,
      name: 'Bob Smith',
      age: 34,
      email: 'bob.smith@example.com',
      phoneNumber: '987-654-3210',
      department: 'Marketing',
      address: {
        street: '456 Oak Ave',
        city: 'Los Angeles',
        state: 'CA',
        zipCode: '90001'
      }
    },
    {
      id: 3,
      name: 'Carol Taylor',
      age: 41,
      email: 'carol.taylor@example.com',
      phoneNumber: '555-123-4567',
      department: 'HR',
      address: {
        street: '789 Pine St',
        city: 'Seattle',
        state: 'WA',
        zipCode: '98101'
      }
    }
  ];


  getEmployees(){
    return this.employees;
  }

  constructor() { }
}
