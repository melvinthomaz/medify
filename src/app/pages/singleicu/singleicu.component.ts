import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-singleicu',
  templateUrl: './singleicu.component.html',
  styleUrls: ['./singleicu.component.css']
})
export class SingleicuComponent {
  singleicu: any;
  isLoggedIn$: Observable<boolean> | undefined;
  constructor(private hero: HeroService, private router: Router,private auth: AuthService) {}

  ngOnInit(): void {
    let pageid = localStorage.getItem('id');
    let num = Number(pageid);

    let singleDataArray = this.hero.getIcu();
    this.singleicu = singleDataArray.filter((d) =>d.id === num);
    console.log(this.singleicu);

    this.isLoggedIn$ = this.auth.isLoggedIn;
  }
Btnpayment(){
  this.router.navigateByUrl('icupayment');
}
Btnsignup(){
  this.router.navigateByUrl('signup');
}
}
