import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-singlediagnostic',
  templateUrl: './singlediagnostic.component.html',
  styleUrls: ['./singlediagnostic.component.css']
})
export class SinglediagnosticComponent {
  singlediagnostic: any;
  isLoggedIn$: Observable<boolean> | undefined;
  constructor(private hero: HeroService, private router: Router,private auth:AuthService) {}

  ngOnInit(): void {
    let pageid = localStorage.getItem('id');
    let num = Number(pageid);

    let singleDataArray = this.hero.getDiagnostic();
    this.singlediagnostic = singleDataArray.filter((d) =>d.id === num);
    console.log(this.singlediagnostic);

    this.isLoggedIn$ = this.auth.isLoggedIn;
  }
Btnpayment(){
  this.router.navigateByUrl('payment');
}
Btnsignup(){
  this.router.navigateByUrl('signup');
}
}
