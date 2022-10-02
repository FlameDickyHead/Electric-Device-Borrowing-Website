import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { BorrowComponent } from './page/borrow/borrow.component';
import { ElectricComponent } from './page/electric/electric.component';
import { EmployeeComponent } from './page/employee/employee.component';
import { HelpComponent } from './page/help/help.component';
import { HomeComponent } from './page/home/home.component';
import { ReturnComponent } from './page/return/return.component';
import { StatusComponent } from './page/status/status.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component : LoginComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'borrow-device',
        component: BorrowComponent,
      },
      {
        path: 'return-device',
        component: ReturnComponent,
      },
      {
        path: 'status-table',
        component: StatusComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'help',
        component: HelpComponent,
      },
      {
        path: 'electric',
        component: ElectricComponent,
      },
    ],
  },
  {path: 'register', component : RegisterComponent},
  {path: 'forgot-password', component : ForgotPasswordComponent},
  {path: 'verify-email', component : VerifyEmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
