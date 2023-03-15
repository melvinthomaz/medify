import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-durablepayment',
  templateUrl: './durablepayment.component.html',
  styleUrls: ['./durablepayment.component.css']
})
export class DurablepaymentComponent {
  singledurable: any;
  constructor(private hero: HeroService, private router: Router) {}

  ngOnInit(): void {
    let pageid = localStorage.getItem('id');
    let num = Number(pageid);

    let singleDataArray = this.hero.getStrectcher();
    this.singledurable = singleDataArray.filter((d) =>d.id === num);
    console.log(this.singledurable);

}
}
