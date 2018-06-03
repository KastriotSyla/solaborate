import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Deptor } from './deptor';
import { Deptors } from './dummy-deptors';

@Injectable({
  providedIn: 'root'
})
export class DeptorService {

  constructor() { }

  getDeptors(): Observable<Deptor[]> {
    return of(Deptors);
  }

  getTheDeptor(id: number): Observable<Deptor> {
    return of(Deptors.find(deptor => deptor.id === id));
  }

}
