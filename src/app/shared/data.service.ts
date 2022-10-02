import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Electronic } from '../model/electronic';
import { Employee } from '../model/employee';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore) { }


  // add employee
  addEmployee(employee: Employee) {
    employee.id = this.afs.createId();
    return this.afs.collection('/Employees').add(employee);
  }

  // get all employees
  getAllEmployees() {
    return this.afs.collection('/Employees').snapshotChanges();
  }

  // delete employee
deleteEmployee(employee : Employee) {
  return this.afs.doc('/Employees/'+employee.id).delete();
}
  // update employee
  updateEmployee(employee : Employee) {
    this.deleteEmployee(employee);
    this.addEmployee(employee);
  }


  //add Electronic Device
  addElectronic(electronic : Electronic){
    electronic.id = this.afs.createId();
    return this.afs.collection('/Electronics').add(electronic);
  }
// get all Electronic Device
getAllElectronic() {
  return this.afs.collection('/Electronics').snapshotChanges();
}
 // delete Electronic Device
 deleteElectronic(electronic : Electronic) {
  return this.afs.doc('/Electronics/'+electronic.id).delete();
}
  // update Electronic Device
  updateElectronic(electronic : Electronic) {
    this.deleteElectronic(electronic);
    this.addElectronic(electronic);
  }
}
