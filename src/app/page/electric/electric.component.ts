import { Component, OnInit } from '@angular/core';
import { Electronic } from 'src/app/model/electronic';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-electric',
  templateUrl: './electric.component.html',
  styleUrls: ['./electric.component.scss']
})
export class ElectricComponent implements OnInit {

  electronicsList : Electronic[] = [];
  electronicObj: Electronic = {
    id: '',
    electronic_id: '',
    electronic_name: '',
    e_brand: '',
    e_model: '',
    serial_number: ''
  };
  id : string = '';
  electronic_id : string = '';
  electronic_name : string = '';
  e_brand: string = '';
  e_model: string = '';
  serial_number : string = '';


  constructor(private data : DataService) { }

  ngOnInit(): void {
    this.getAllElectronic();
  }
  resetForm(){
    this.id ='';
    this.electronic_id = '' ;
    this.electronic_name = '';
    this.e_brand = '';
    this.e_model = '';
    this.serial_number ='';
    }
  getAllElectronic() {
    this.data.getAllElectronic().subscribe(res => {
      this.electronicsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, err => {
      alert('Error while fetching electronic devices data');
    })
  }
  addElectronic() {
    if(this.electronic_id == '' || this.electronic_name == ''|| this.e_brand == ''|| this.e_model == '' || this.serial_number =='') {
      alert('Fill all input fields');
    }
    this.electronicObj.id = '';
    this.electronicObj.electronic_id = this.electronic_id;
    this.electronicObj.electronic_name = this.electronic_name;
    this.electronicObj.e_brand = this.e_brand;
    this.electronicObj.e_model = this.e_model;
    this.electronicObj.serial_number = this.serial_number;
    this.data.addElectronic(this.electronicObj);
    this.resetForm();
  

  }
  updateElectronic() {
    
  }
  deleteElectronic(electronic: Electronic) {
      if(window.confirm('Are you sure to delete ' + electronic.electronic_name +' '+ electronic.e_brand + '?')) {
      this.data.deleteElectronic(electronic);
      }
  }
}
