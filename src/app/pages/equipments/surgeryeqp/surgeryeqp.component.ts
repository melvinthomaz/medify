import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-surgeryeqp',
  templateUrl: './surgeryeqp.component.html',
  styleUrls: ['./surgeryeqp.component.css']
})
export class SurgeryeqpComponent {
  constructor(private hero:HeroService,private router:Router){}
  surgery=this.hero.getSurgery();

  gotoHere(id:any){
    localStorage.setItem('id',id);
    this.router.navigate(['/singleicu/' +id])
  }
}
