import { Component, OnInit } from '@angular/core';
import { Deptor } from '../deptor';
import { Deptors } from '../dummy-deptors';
import { DeptorService } from '../deptor.service';

@Component({
  selector: 'app-deptors',
  templateUrl: './deptors.component.html',
  styleUrls: ['./deptors.component.css']
})
export class DeptorsComponent implements OnInit {
  keys = Object.keys;
  deptors : Deptor[] = [];
  page = 1;
  id:number;
  dept_name:string = '';
  amount:number;
  date:string = '';

  invalid_id = false;
  invalid_name = false;
  invalid_amount = false;
  invalid_date = false;
  higher_amount = false;

  addnewdeptor = false;

  constructor(
    private deptorService: DeptorService
  ) { }

  ngOnInit() {
    this.getDeptors()
  }

  addNew(){
    this.addnewdeptor = true;
  }
  clean(){
    this.id = null;
    this.dept_name = '';
    this.amount = null;
    this.date = '';
  }
  getDeptors(): void {
    this.deptorService.getDeptors()
      .subscribe(deptors => this.deptors = deptors);
    this.keyOfDeptors = Object.keys(this.deptors)
  }

  deleteDeptor(key){
    let index = this.deptors.indexOf(this.deptors[key]);
    this.deptors.splice(index, 1);
    this.keyOfDeptors = Object.keys(this.deptors);
  }
  addNewDeptor() {
    if(this.id == null){
      this.invalid_id = true
    }else if(this.dept_name == ''){
      this.invalid_name = true;
    }else if(this.amount == null){
      this.invalid_amount = true;
    }else if(this.amount > 1000){
      this.higher_amount = true;
    }else if(this.date == ''){
      this.invalid_date = true;
    }else{
      this.deptors.push({id: this.id, name: this.dept_name, amount: this.amount, date: this.date});
      this.invalid_date = false;
      this.invalid_name = false;
      this.invalid_id = false;
      this.invalid_amount = false;
      this.higher_amount = false;
      this.clean();
    }
  }

  public keyOfDeptors;
}
