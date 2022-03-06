import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myStudents:Student[] =[
    new Student('brian kiprono',101,3,8),
    new Student('mercy munyi',91,5,9),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
