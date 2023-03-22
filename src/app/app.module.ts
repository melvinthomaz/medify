import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { SignupComponent } from './pages/signup/signup/signup.component';
import { ContactusComponent } from './pages/contactus/contactus/contactus.component';
import { NavbarComponent } from './util/navbar/navbar/navbar.component';
import { FooterComponent } from './util/footer/footer/footer.component';
import { EquipmentsComponent } from './pages/equipments/equipments/equipments.component';
import { DiagnosticeqpComponent } from './pages/equipments/diagnosticeqp/diagnosticeqp/diagnosticeqp.component';
import { MedicaleqpComponent } from './pages/equipments/medicaleqp/medicaleqp.component';
import { SurgeryeqpComponent } from './pages/equipments/surgeryeqp/surgeryeqp.component';
import { DurableeqpComponent } from './pages/equipments/durableeqp/durableeqp.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { LoginComponent } from './pages/login/login/login.component';
import { SinglediagnosticComponent } from './pages/singlediagnostic/singlediagnostic.component';
import { SinglelaboratoryComponent } from './pages/singlelaboratory/singlelaboratory.component';
import { SingleicuComponent } from './pages/singleicu/singleicu.component';
import { SingledurableComponent } from './pages/singledurable/singledurable.component';
import { SafepipePipe } from './safepipe.pipe';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { PaymentComponent } from './pages/payment/payment.component';
import { LabpaymentComponent } from './pages/labpayment/labpayment.component';
import { IcupaymentComponent } from './pages/icupayment/icupayment.component';
import { DurablepaymentComponent } from './pages/durablepayment/durablepayment.component';
import { ForgotPasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { VerifyemailComponent } from './pages/verifyemail/verifyemail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    ContactusComponent,
    NavbarComponent,
    FooterComponent,
    EquipmentsComponent,
    DiagnosticeqpComponent,
    MedicaleqpComponent,
    SurgeryeqpComponent,
    DurableeqpComponent,
    LoginComponent,
    SinglediagnosticComponent,
    SinglelaboratoryComponent,
    SingleicuComponent,
    SingledurableComponent,
    SafepipePipe,
    DashboardComponent,
    PaymentComponent,
    LabpaymentComponent,
    IcupaymentComponent,
    DurablepaymentComponent,
    ForgotPasswordComponent,
    VerifyemailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideRemoteConfig(() => getRemoteConfig())
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
