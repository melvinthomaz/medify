import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  ngOnInit(): void {
      
  }
  email: string = '';
  message: string = '';

  user: any;
    
   constructor(private auth : AuthService){ }
   contactus() {
    if (this.email == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your email...',
        background: "#212529"
      })
      return
      
    }
    if (this.message == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your message...',
        background: "#212529"
      })
      return
    }
    alert('Message Send Successfully');

  }
}
