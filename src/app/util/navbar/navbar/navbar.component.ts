import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isLoggedIn$: Observable<boolean> | undefined;
  constructor(private auth:AuthService){}

  ngOnInit() {
    this.isLoggedIn$=this.auth.isLoggedIn;
  }
logout()
{
  this.auth.logout();
}

}
