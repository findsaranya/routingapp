import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params, Router} from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    console.log(this.route.snapshot);
     const id = +this.route.snapshot.params['id'];
      this.server = this.serversService.getServer(id);
      console.log(this.server)
    this.route.params
    .subscribe((params :Params) => {
      //const id = this.route.params['id'];
      this.server = this.serversService.getServer(+params['id']);
       console.log(this.server)
    })
  }
  onEditUser(id:number){
    console.log("server id",id);
    this.router.navigate(['edit'],{relativeTo:this.route})
  }

}
