import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'search-students',
  templateUrl: './search-students.component.html',
  styleUrls: ['./search-students.component.css']
})
export class SearchStudentsComponent implements OnInit {

  name: string;
  students: Student[];

  constructor(private dataService: StudentService) { }

  ngOnInit() {
    this.name = null;
  }

  private searchStudent() {
    this.dataService.getStudentsByName(this.name)
      .subscribe(students => this.students = students);
  }

  onSubmit() {
    this.searchStudent();
  }
}
