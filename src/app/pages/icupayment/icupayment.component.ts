import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-icupayment',
  templateUrl: './icupayment.component.html',
  styleUrls: ['./icupayment.component.css']
})
export class IcupaymentComponent {
  singleicu: any;
  data: any;

  name: string = '';
  cardnumber: string = '';
  expiration: string = '';
  cvv: string = '';
  constructor(private hero: HeroService, private router: Router,private auth: AuthService) {}

  ngOnInit(): void {
    let pageid = localStorage.getItem('id');
    let num = Number(pageid);

    let singleDataArray = this.hero.getIcu();
    this.singleicu = singleDataArray.filter((d) =>d.id === num);
    console.log(this.singleicu);

}
payNow() {

  if (this.name == '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please enter your name...',
      background: '#212529',
    });
    return;
  }
  if (this.cardnumber == '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please enter your card number...',
      background: '#212529',
    });
    return;
  }
  if (this.expiration == '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please enter expiration number...',
      background: '#212529',
    });
    return;
  }
  if (this.cvv == '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please enter your cvv number...',
      background: '#212529',
    });
    return;
  }
  
   this.auth.payNow(this.name,this.cardnumber,this.expiration,this.cvv);
   this.name='';
   this.cardnumber='';
   this.expiration='';
   this.cvv='';
}
}
