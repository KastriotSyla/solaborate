import { Deptor } from './deptor';
import { Injectable } from '@angular/core';


@Injectable()
export class DummyDeptors {

  deptors = [
    { id: 1, name: 'Filan Fisteku', amount: 120, date: '01/03/2009' },
    { id: 2, name: 'John Doe', amount: 234, date: '01/03/2010' },
    { id: 3, name: 'Kastriot Syla', amount: 123450, date: '01/03/2012' },
    { id: 4, name: 'Besmir Simnica', amount: 345, date: '01/03/2016' },
    { id: 5, name: 'John Doe', amount: 234, date: '01/05/2009' },
    { id: 6, name: 'Filan Fisteku', amount: 145, date: '31/03/2009' },
    { id: 7, name: 'John Doe', amount: 643, date: '01/03/2010' },
    { id: 8, name: 'Blerton Syla', amount: 645, date: '01/03/2018' },
    { id: 9, name: 'Nikolla Koperniku', amount: 745, date: '01/03/2017' },
    { id: 10, name: 'Dikush Dikushi', amount: 84543, date: '01/03/2006' },
  ];
}

export const Deptors: Deptor[] = [
  { id: 1, name: 'Filan Fisteku', amount: 120, date: '01/03/2009' },
  { id: 2, name: 'John Doe', amount: 234, date: '01/03/2010' },
  { id: 3, name: 'Kastriot Syla', amount: 123450, date: '01/03/2012' },
  { id: 4, name: 'Besmir Simnica', amount: 345, date: '01/03/2016' },
  { id: 5, name: 'John Doe', amount: 234, date: '01/05/2009' },
  { id: 6, name: 'Filan Fisteku', amount: 145, date: '31/03/2009' },
  { id: 7, name: 'John Doe', amount: 643, date: '01/03/2010' },
  { id: 8, name: 'Blerton Syla', amount: 645, date: '01/03/2018' },
  { id: 9, name: 'Nikolla Koperniku', amount: 745, date: '01/03/2017' },
  { id: 10, name: 'Dikush Dikushi', amount: 84543, date: '01/03/2006' },
];
