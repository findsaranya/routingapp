import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthGuardService } from '../auth-guard.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router,private authService:AuthService) { }

  ngOnInit() {
  }
  onLoadServers(id:number){
    console.log("btn clicked");
    this.route.navigate(['/servers',id,'edit'],{queryParams:{allowEdit:'yes',notEdit:false},
  fragment:'loading'
  });
  }
onLogIn(){
  this.authService.login();
}
onLogOut(){
  this.authService.logout();
}
}
