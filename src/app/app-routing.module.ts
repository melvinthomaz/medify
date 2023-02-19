import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './pages/contactus/contactus/contactus.component';
import { EquipmentsComponent } from './pages/equipments/equipments/equipments.component';
import { HomeComponent } from './pages/home/home/home.component';
import { SignupComponent } from './pages/signup/signup/signup.component';

const routes: Routes = [
  {
    path:"home",component:HomeComponent
  },
  {
    path:"equipments",component:EquipmentsComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"contactus",component:ContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
