import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singlediagnostic',
  templateUrl: './singlediagnostic.component.html',
  styleUrls: ['./singlediagnostic.component.css']
})
export class SinglediagnosticComponent {
  singlediagnostic: any;
  constructor(private hero: HeroService, private router: Router) {}

  ngOnInit(): void {
    let pageid = localStorage.getItem('id');
    let num = Number(pageid);

    let singleDataArray = this.hero.getDiagnostic();
    this.singlediagnostic = singleDataArray.filter((d) =>d.id === num);
    console.log(this.singlediagnostic);
  }
Btnclick(){
  this.router.navigateByUrl('payment');
}
}
