import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {
  myStudents:Student[] =[
    new Student('brian kiprono',101,3,8),
    new Student('mercy munyi',91,5,9),
  ];

  deleteStudent(deleteThis:any, index:any){
    if (deleteThis) {
      let deleteCheck = confirm(`Are You Sure You Want To Remove This Student?`)
      if(deleteCheck) {
        this.myStudents.splice(index,1);
      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
