import { Component, OnInit } from '@angular/core';
import { Deptor } from '../deptor';
import { DeptorService } from '../deptor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  deptors : Deptor[] = [];

  constructor(
    private deptorService: DeptorService
  ) { }

  ngOnInit() {
    this.getDeptors();
  }

  getDeptors(): void {
    this.deptorService.getDeptors()
      .subscribe(deptors => this.deptors = deptors.slice(0, 5));
  }
}
