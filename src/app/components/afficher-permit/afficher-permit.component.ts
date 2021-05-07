import { Component, OnInit } from '@angular/core';
import { Citizen } from 'src/app/models/citizen';
import { Permis } from 'src/app/models/permis';
import { CitizenEnfantService } from 'src/app/services/citizen-enfant.service';
import { PermisService } from 'src/app/services/permis.service';
import { SubscribeService } from 'src/app/services/subscribe';

@Component({
  selector: 'app-afficher-permit',
  templateUrl: './afficher-permit.component.html',
  styleUrls: ['./afficher-permit.component.css']
})
export class AfficherPermitComponent implements OnInit {

  permis: Permis;
  numSocial: string;
  
  constructor(public service: SubscribeService) { }

  ngOnInit(): void {
    this.service.findPermit(history.state.data).subscribe(data => {
      this.permis = data;
    });
  }
}
