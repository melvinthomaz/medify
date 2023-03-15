import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-labpayment',
  templateUrl: './labpayment.component.html',
  styleUrls: ['./labpayment.component.css']
})
export class LabpaymentComponent {
  singlelaboratory: any;
  constructor(private hero: HeroService, private router: Router) {}

  ngOnInit(): void {
    let pageid = localStorage.getItem('id');
    let num = Number(pageid);

    let singleDataArray = this.hero.getLaboratory();
    this.singlelaboratory = singleDataArray.filter((d) =>d.id === num);
    console.log(this.singlelaboratory);

}
}
