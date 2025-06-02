import { Component, OnInit } from '@angular/core';
import { EmployeesListService } from '../services/employees-list.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: any[] = [];
  constructor(private employeeService:EmployeesListService) { }



  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

}
