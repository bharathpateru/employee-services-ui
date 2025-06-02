import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { PostsComponent } from './posts/posts.component';



const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'signup-form', component: SignupFormComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'employee-registration', component: EmployeeRegistrationComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
