import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Student } from '../../../models/student';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  standalone: false,
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent implements OnChanges{
  @Input() studentToEdit: Student | null = null;

  @Output() studentAdded = new EventEmitter<Student>();

  @Output() studentUpdated = new EventEmitter<Student>();

  studentForm = new FormGroup({
    name : new FormControl('',Validators.required),

    email : new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    course : new FormControl('', Validators.required),
    age: new FormControl('',Validators.required)
  });

  ngOnChanges(changes: SimpleChanges) {
    if(changes['studentToEdit']){
      if(this.studentToEdit){
        this.studentForm.patchValue({
          name: this.studentToEdit.name,
          email: this.studentToEdit.email,
          course: this.studentToEdit.course,
          age: String(this.studentToEdit.age)
        });
      }else{
        this.studentForm.reset();
      }
    }
  }
  onSubmit(){
    if(this.studentForm.invalid){
      this.studentForm.markAllAsTouched();
      return;
    }

    const student : Student ={
      id: this.studentToEdit?.id ?? 0,
      name: this.studentForm.value.name!,
      email: this.studentForm.value.email!,
      course : this.studentForm.value.course!,
      age: Number(this.studentForm.value.age)
    };

    if(this.studentToEdit){

       this.studentUpdated.emit(student);

    } else {

      this.studentAdded.emit(student);
      
    }

    this.studentForm.reset();
  }
}
