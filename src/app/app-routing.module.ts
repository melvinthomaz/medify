import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contactus/contactus/contactus.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DurablepaymentComponent } from './pages/durablepayment/durablepayment.component';
import { DiagnosticeqpComponent } from './pages/equipments/diagnosticeqp/diagnosticeqp/diagnosticeqp.component';
import { DurableeqpComponent } from './pages/equipments/durableeqp/durableeqp.component';
import { MedicaleqpComponent } from './pages/equipments/medicaleqp/medicaleqp.component';
import { SurgeryeqpComponent } from './pages/equipments/surgeryeqp/surgeryeqp.component';
import { ForgotPasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { HomeComponent } from './pages/home/home/home.component';
import { IcupaymentComponent } from './pages/icupayment/icupayment.component';
import { LabpaymentComponent } from './pages/labpayment/labpayment.component';
import { LoginComponent } from './pages/login/login/login.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { SignupComponent } from './pages/signup/signup/signup.component';
import { SinglediagnosticComponent } from './pages/singlediagnostic/singlediagnostic.component';
import { SingledurableComponent } from './pages/singledurable/singledurable.component';
import { SingleicuComponent } from './pages/singleicu/singleicu.component';
import { SinglelaboratoryComponent } from './pages/singlelaboratory/singlelaboratory.component';
import { VerifyemailComponent } from './pages/verifyemail/verifyemail.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  
  {
    path: 'contactus',
    component: ContactUsComponent
  },
  {
    path: 'diagnostic',
    component: DiagnosticeqpComponent
  },
  {
    path: 'medical',
    component: MedicaleqpComponent
  },
  {
    path: 'surgery',
    component: SurgeryeqpComponent
  },
  {
    path: 'durable',
    component: DurableeqpComponent
  },
  
  {
    path:'singlediagnostic/:id',
    component:SinglediagnosticComponent
  },
  {
    path:'singlelaboratory/:id',
    component:SinglelaboratoryComponent
  },
  {
    path:'singleicu/:id',
    component:SingleicuComponent
  },
  {
    path:'singledurable/:id',
    component:SingledurableComponent
  },
  {
    path: '', redirectTo:'login', pathMatch:'full'
  },
  {
    path: 'dashboard', 
    component: DashboardComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
   path: 'labpayment',
   component: LabpaymentComponent
  },
  {
    path: 'icupayment',
    component: IcupaymentComponent
  },
  {
    path: 'durablepayment',
    component: DurablepaymentComponent
  },
  {
    path:'forgotpassword',
    component:ForgotPasswordComponent
  },
  {
    path:'verifyemail',
    component:VerifyemailComponent
  }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
