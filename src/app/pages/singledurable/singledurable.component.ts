import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-singledurable',
  templateUrl: './singledurable.component.html',
  styleUrls: ['./singledurable.component.css']
})
export class SingledurableComponent {
  singledurable: any;

  isLoggedIn$: Observable<boolean> | undefined;
  constructor(private hero: HeroService, private router: Router,private auth: AuthService) {}

  ngOnInit(): void {
    let pageid = localStorage.getItem('id');
    let num = Number(pageid);

    let singleDataArray = this.hero.getStrectcher();
    this.singledurable = singleDataArray.filter((d) =>d.id === num);
    console.log(this.singledurable);

    this.isLoggedIn$ = this.auth.isLoggedIn;
  }
Btnpayment(){
  this.router.navigateByUrl('durablepayment');
}
Btnsignup(){
  this.router.navigateByUrl('signup');
}
}
