import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { SignupComponent } from './pages/signup/signup/signup.component';
import { ContactusComponent } from './pages/contactus/contactus/contactus.component';
import { NavbarComponent } from './util/navbar/navbar/navbar.component';
import { FooterComponent } from './util/footer/footer/footer.component';
import { EquipmentsComponent } from './pages/equipments/equipments/equipments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    ContactusComponent,
    NavbarComponent,
    FooterComponent,
    EquipmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
