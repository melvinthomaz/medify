import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})


  export class ForgotPasswordComponent implements OnInit {

    email : string = '';
  
    constructor(private auth : AuthService,private router:Router) { }
  
    ngOnInit(): void {
    }
  
    forgotPassword() {
      this.auth.forgotPassword(this.email);
      this.email = '';
      this.router.navigate(['verifyemail'])
    }
  
  }

