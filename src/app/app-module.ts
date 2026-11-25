import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './shared/header/header';
import { CommonModule } from '@angular/common';
import { AddStudent } from './features/students/add-student/add-student';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentList } from './features/students/student-list/student-list';

@NgModule({
  declarations: [
    App,
    Header,
    StudentList,
    AddStudent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
