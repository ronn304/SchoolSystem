import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  newStudent = new Student('',0,9,0);
  @Output() addStudent = new EventEmitter<Student>();
  submitStudent() {
    this.addStudent.emit(this.newStudent);
    alert(this.newStudent.name+this.newStudent.adm_number+this.newStudent.class_level+this.newStudent.age)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
