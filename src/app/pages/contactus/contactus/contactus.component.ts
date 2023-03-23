import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactUsComponent {
  email:string='';
  message:string='';
  constructor(private Auth:AuthService,public hero:AuthService){}
    contactus()
    {
      this.Auth.contactus(this.email,this.message)
    }

}
