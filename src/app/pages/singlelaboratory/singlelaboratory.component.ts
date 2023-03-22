import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singlelaboratory',
  templateUrl: './singlelaboratory.component.html',
  styleUrls: ['./singlelaboratory.component.css']
})
export class SinglelaboratoryComponent {
  singlelaboratory: any;
  constructor(private hero: HeroService, private router: Router) {}

  ngOnInit(): void {
    let pageid = localStorage.getItem('id');
    let num = Number(pageid);

    let singleDataArray = this.hero.getLaboratory();
    this.singlelaboratory = singleDataArray.filter((d) =>d.id === num);
    console.log(this.singlelaboratory);
}
Btnclick(){
  this.router.navigateByUrl('labpayment');
}
}
