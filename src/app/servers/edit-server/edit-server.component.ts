import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateGuard } from 'src/app/can-deactivte-guard.service';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanDeactivateGuard {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
 allowEdit:boolean = false;
 changedServer:boolean = false;
  constructor(private serversService: ServersService,private route : ActivatedRoute,private router:Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe((queryParams:Params) => {
      this.allowEdit = queryParams['id'] ==='1' ? true : false;
    });
    // this.route.fragment.subscribe((params:Params) => {

    // });
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changedServer=true;
    this.router.navigate(['../'],{relativeTo:this.route});
  }
  canDeactivate():Observable<boolean> | Promise<boolean> | boolean{
     if(!this.allowEdit){
       return true;
     }
     if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changedServer){
        return confirm("Do You want to leave");
     }else{
       return true;
     }
  }

}
