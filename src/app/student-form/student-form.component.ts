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
    if(this.newStudent.name !='' && this.newStudent.adm_number > 0 && this.newStudent.class_level < 9 && this.newStudent.age > 0){
      this.addStudent.emit(this.newStudent);
    }
    else{
      alert('check your input values')
    }
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
