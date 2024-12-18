import { Component } from '@angular/core';
import { Employee } from '../employee.model'; // If your employee.model.ts
@Component({
selector: 'app-employee',
templateUrl: './employee.component.html',
styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
employees: Employee[] = [];
newEmployee: Employee = { id: 0, name: '', salary: 0, fieldOfWork: '' };

addEmployee() {

if (this.newEmployee.id && this.newEmployee.name && this.newEmployee.salary > 0 && this.newEmployee.fieldOfWork) {
this.employees.push({ ...this.newEmployee });
this.resetForm();
}
}

deleteEmployee(id: number) {
this.employees = this.employees.filter(employee => employee.id !==id);
}

resetForm() {
this.newEmployee = { id: 0, name: '', salary: 0, fieldOfWork: '' };
}
}