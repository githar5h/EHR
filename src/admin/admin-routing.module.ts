import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/add/add.patient.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'admin-dashboard', component: DashboardHomeComponent },
      { path: 'doctor', component: DoctorComponent },
      { path: 'patient', component: PatientComponent },
    ],
  },
  {
    path:'',redirectTo:'admin/admin-dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
