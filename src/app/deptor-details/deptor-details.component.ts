import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DeptorService } from '../deptor.service';

import { Deptor } from '../deptor';

@Component({
  selector: 'app-deptor-details',
  templateUrl: './deptor-details.component.html',
  styleUrls: ['./deptor-details.component.css']
})
export class DeptorDetailsComponent implements OnInit {

  @Input() deptor: Deptor;

  constructor(
    private route: ActivatedRoute,
    private deptorService: DeptorService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getTheDeptor();
  }

  getTheDeptor(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.deptorService.getTheDeptor(id)
      .subscribe(deptor => this.deptor = deptor);
  }

  goBack(): void {
    this.location.back();
  }

}
