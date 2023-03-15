import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-medicaleqp',
  templateUrl: './medicaleqp.component.html',
  styleUrls: ['./medicaleqp.component.css']
})
export class MedicaleqpComponent {
  constructor(private hero:HeroService,private router:Router){}
  medical=this.hero.getMedical();

  gotoHere(id:any){
    localStorage.setItem('id',id);
    this.router.navigate(['/singlelaboratory/' +id])
  }
}
