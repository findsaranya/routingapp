import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  onLoadServers(id:number){
    console.log("btn clicked");
    this.route.navigate(['/servers',id,'edit'],{queryParams:{allowEdit:'yes',notEdit:false},
  fragment:'loading'
  });
  }

}
