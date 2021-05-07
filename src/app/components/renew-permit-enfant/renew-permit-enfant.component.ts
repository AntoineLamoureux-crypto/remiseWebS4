import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitizenEnfantService } from 'src/app/services/citizen-enfant.service';

@Component({
  selector: 'app-renew-permit-enfant',
  templateUrl: './renew-permit-enfant.component.html',
  styleUrls: ['./renew-permit-enfant.component.css']
})
export class RenewPermitEnfantComponent implements OnInit {

  validMessage: string = '';
  numSocial: '';
  flag: boolean;

  constructor(private service: CitizenEnfantService, private router: Router) { }

  ngOnInit(): void {
  }

  public renewChildPermit() {
    this.service.renewChildPermit(this.numSocial).subscribe(
      (data) => {
        if (data != null){
        this.validMessage = 'Vous avez bien renouveler votre permis'
      } else {
        this.validMessage = 'Please fill the form correctly'
      }
    });
  }

}
