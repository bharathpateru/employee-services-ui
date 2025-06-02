import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListService } from './services/employees-list.service';
import { EmployeesComponent } from './employees/employees.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { TodosFormComponent } from './todos-form/todos-form.component';
import { TodosListComponent } from './todos-list/todos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AboutComponent,
    ContentComponent,
    SignupFormComponent,
    EmployeeRegistrationComponent,
    PostsComponent,
    TodosFormComponent,
    TodosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [PostService, EmployeesListService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
