import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-singleicu',
  templateUrl: './singleicu.component.html',
  styleUrls: ['./singleicu.component.css']
})
export class SingleicuComponent {
  singleicu: any;
  constructor(private hero: HeroService, private router: Router) {}

  ngOnInit(): void {
    let pageid = localStorage.getItem('id');
    let num = Number(pageid);

    let singleDataArray = this.hero.getIcu();
    this.singleicu = singleDataArray.filter((d) =>d.id === num);
    console.log(this.singleicu);
  }
Btnclick(){
  this.router.navigateByUrl('icupayment');
}
}
