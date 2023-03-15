import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-diagnosticeqp',
  templateUrl: './diagnosticeqp.component.html',
  styleUrls: ['./diagnosticeqp.component.css']
})
export class DiagnosticeqpComponent {
constructor(private hero:HeroService,private router:Router){}
diagnostic=this.hero.getData();

gotoHere(id:any){
  localStorage.setItem('id',id);
  this.router.navigate(['/singlediagnostic/' +id])
}
}
