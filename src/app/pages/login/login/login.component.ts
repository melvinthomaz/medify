import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {
      
  }
 

   

  emailIn: string = '';
  passwordIn: string = '';

  user: any;
    
   constructor(private auth : AuthService){ }

   
    login() {
      if (this.emailIn == "") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter your email...',
          background: "#212529"
        })
        return
      }
      if (this.passwordIn == "") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter your password...',
          background: "#212529"
        })
        return
      }
  
       this.auth.login(this.emailIn, this.passwordIn)
      this.emailIn = ""
      this.passwordIn = ""
    }
}
