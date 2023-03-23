import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-singlelaboratory',
  templateUrl: './singlelaboratory.component.html',
  styleUrls: ['./singlelaboratory.component.css']
})
export class SinglelaboratoryComponent {
  singlelaboratory: any;
  isLoggedIn$: Observable<boolean> | undefined;
  constructor(private hero: HeroService, private router: Router,private auth: AuthService) {}

  ngOnInit(): void {
    let pageid = localStorage.getItem('id');
    let num = Number(pageid);

    let singleDataArray = this.hero.getLaboratory();
    this.singlelaboratory = singleDataArray.filter((d) =>d.id === num);
    console.log(this.singlelaboratory);

    this.isLoggedIn$ = this.auth.isLoggedIn;
}
Btnpayment(){
  this.router.navigateByUrl('labpayment');
}
Btnsignup(){
  this.router.navigateByUrl('signup');
}
}
