import { Routes } from '@angular/router';
import { StudentRegisterComponent } from './components/student-register/studentregister.component';
import { StudentUpdateComponent } from './components/student-update/studentupdate.component';
import { StudentFileuploadComponent } from './components/student-fileupload/studentfileupload.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '',         component: HomeComponent, title:'Home Page',    pathMatch: 'full' },
    { path: 'register', component: StudentRegisterComponent, title:'Registration Page',   pathMatch: 'full' },
    { path: 'update',   component: StudentUpdateComponent,  title:'Update Page',    pathMatch: 'full' },
    { path: 'upload',   component: StudentFileuploadComponent, title:'Assignments Upload Page',  pathMatch: 'full' }
];
