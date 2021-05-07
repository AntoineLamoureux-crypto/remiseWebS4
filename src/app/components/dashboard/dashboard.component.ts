import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Citizen } from 'src/app/models/citizen';
import { CitizenEnfant } from 'src/app/models/citizen-enfant';
import { CitizenEnfantService } from 'src/app/services/citizen-enfant.service';
import { SubscribeService } from 'src/app/services/subscribe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  citizen: Citizen;
  citizenEnfant: CitizenEnfant;
  listCitizenEnfant: Array<CitizenEnfant>;
  permisId: number;
  constructor(public service: SubscribeService, public serviceEnfant: CitizenEnfantService, public router: Router) { }

  ngOnInit(): void {
    this.citizen = history.state.data;
    this.getAllChilds();
  }

  public getAllChilds(): void {
    this.serviceEnfant.findAllChilds(this.citizen.numSocial, this.citizen.email).subscribe(data => {
      this.listCitizenEnfant = data;
    });
  }


  public afficherPermit( numSocial: string) {
    this.permisId = this.getPermitID();
    this.router.navigateByUrl('/afficherPermit' , {state: { data:  numSocial } });
  }

  public afficherEnfant(citizenEnfant: CitizenEnfant) : void {
    this.router.navigateByUrl('/dashboardEnfant', {state: { data:  citizenEnfant }});
  }

  public getPermitID() : number {
    this.serviceEnfant.findPermitId(this.citizen.numSocial).subscribe(data => {
      return this.permisId = data;
    });
    return this.permisId;
  }

  
}

  
