import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-durableeqp',
  templateUrl: './durableeqp.component.html',
  styleUrls: ['./durableeqp.component.css']
})
export class DurableeqpComponent {
  constructor(private hero:HeroService,private router:Router){}
  durable=this.hero.getDurable();

  gotoHere(id:any){
    localStorage.setItem('id',id);
    this.router.navigate(['/singledurable/' +id])
  }
}
