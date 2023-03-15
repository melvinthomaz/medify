import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  singlediagnostic: any;
  constructor(private hero: HeroService, private router: Router) {}

  ngOnInit(): void {
    let pageid = localStorage.getItem('id');
    let num = Number(pageid);

    let singleDataArray = this.hero.getDiagnostic();
    this.singlediagnostic = singleDataArray.filter((d) =>d.id === num);
    console.log(this.singlediagnostic);

}
}
