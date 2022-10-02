import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeesList : Employee[] = [];
  employeeObj : Employee = {
    id: '',
    employee_id: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    department: ''
  };
  id : string = '';
  employee_id : string = '';
  first_name : string = '';
  last_name : string = '';
  phone_number: string = '';
  email: string = '';
  department : string = '';


  constructor(private data : DataService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }
  resetForm(){
  this.id  = '';
  this.employee_id = '';
  this.first_name  = '';
  this.last_name  = '';
  this.phone_number = '';
  this.email = '';
  this.department = '';
  }

  getAllEmployees() {

    this.data.getAllEmployees().subscribe(res => {
      this.employeesList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, err => {
      alert('Error while fetching employee data');
    })
  }
  addEmployee() {
    if(this.employee_id == '' || this.first_name == ''|| this.last_name == ''|| this.phone_number == '' || this.email =='' || this.department == '') {
      alert('Fill all input fields');
    }
    this.employeeObj.id = '';
    this.employeeObj.employee_id = this.employee_id;
    this.employeeObj.email = this.email;
    this.employeeObj.first_name = this.first_name;
    this.employeeObj.last_name = this.last_name;
    this.employeeObj.phone_number = this.phone_number;
    this.employeeObj.department = this.department;
    this.data.addEmployee(this.employeeObj);
    this.resetForm();

  }
  updateEmployee() {
    
  }
  deleteEmployee(employee: Employee) {
      if(window.confirm('Are you sure to delete ' + employee.first_name +' '+ employee.last_name + '?')) {
      this.data.deleteEmployee(employee);
      }
  }
}
