import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Citizen } from 'src/app/models/citizen';
import { SubscribeService } from 'src/app/services/subscribe';

@Component({
  selector: 'app-renew-permit-adulte',
  templateUrl: './renew-permit-adulte.component.html',
  styleUrls: ['./renew-permit-adulte.component.css']
})
export class RenewPermitAdulteComponent implements OnInit {
  validMessage: string = '';
  numSocial: '';
  flag: boolean;

  constructor(private service: SubscribeService, private router: Router) { }

  ngOnInit(): void {
  }

  public renewAdultPermit() {
      this.service.renewAdultPermit(this.numSocial).subscribe(
        (data) => {
          if (data != null){
          this.validMessage = 'Vous avez bien renouveler votre permis'
        } else {
          this.validMessage = 'Please fill the form correctly'
        }
      });
    }
}
