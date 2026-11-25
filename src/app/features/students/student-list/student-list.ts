import { Component } from '@angular/core';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
    searchText: string = '';
    students: Student[] = [
    {
      id: 1,
      name: 'Pratibha Dhenge',
      email: 'pratibha@gmail.com',
      course: 'Angular',
      age: 24
    },
    {
      id: 2,
      name: 'Ravina Gojare',
      email: 'Ravina@gmail.com',
      course: 'Java',
      age: 25
    },
    {
      id: 3,
      name: 'Vidya Dhenge',
      email: 'vidya@gmail.com',
      course: 'Physics',
      age: 29
    },
    {
      id: 4,
      name: 'Chinmyee Patil',
      email: 'Chinmyee@gmail.com',
      course: 'Manual Testing',
      age: 24
    },
    {
      id: 5,
      name: 'Shweta Patil',
      email: 'Shweta@gmail.com',
      course: 'Java',
      age: 24
    }
  ];

editingStudent: Student | null = null;

editStudent(student: Student) {

  this.editingStudent = { ...student };

}

updateStudent(updatedStudent: Student) {

  this.students = this.students.map(student =>
    student.id === updatedStudent.id
      ? updatedStudent
      : student
  );

  this.editingStudent = null;

  alert('Student updated successfully!');

}

addStudent(student : Student){
  const newStudent: Student ={
    ...student,
    id: Math.max(0, ...this.students.map(s => s.id)) + 1
  };
    this.students.push(newStudent);
  }


deleteStudent(id: number){
  const confirmDelete = confirm(
    'Are you sure you want to delete this student?'
  );

  if(confirmDelete) {
      this.students = this.students.filter(
        student => student.id !== id
      );

     if (this.editingStudent?.id === id) {
      this.editingStudent = null;
    }
  }
}

get filteredStudents(): Student[]{
  return this.students.filter(student =>
    student.name.toLowerCase().includes(this.searchText.toLowerCase())
  );
}
}

