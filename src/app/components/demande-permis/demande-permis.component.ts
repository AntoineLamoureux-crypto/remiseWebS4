import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, UrlTree } from '@angular/router';
import { CitizenService } from 'src/app/services/citizen.service';
import { SubscribeService } from 'src/app/services/subscribe';

@Component({
  selector: 'app-demande-permis',
  templateUrl: './demande-permis.component.html',
  styleUrls: ['./demande-permis.component.css']
})
export class DemandePermisComponent implements OnInit {

  showAplySanteButton = false;
  showAplyTestButton = false;
  showAplyErrorButton = false;
  showVerifyButton = true;
  infoPermis: string = ''
  urlPermis: string = 'http://localhost:9090/permisSante'
  urlMinistere: string = 'http://localhost:9090/ministere'
  
  num_social: '';
  type_permis: '';
  age: '';
  

  http: any;
  constructor(private serviceRequest: CitizenService, private router: Router) { }

  ngOnInit(): void {
  }

  public onValidate() {
      this.serviceRequest.checkCitizenValidity(this.num_social).subscribe((data) => {
        if (data == null)
          this.infoPermis = "Numéro invalide"
        else if (data){
          this.serviceRequest.typePermisAllowed(this.num_social).subscribe((data) => {
            if (data == 0){
              this.infoPermis = "Votre NASS est valide et votre dossier indique que vous pouvez appliquer pour le permis vaccin et test."
              this.showAplyTestButton = true;
              this.showAplySanteButton = true;
          } else if (data == 1){
            this.infoPermis = "Votre NASS est valide et votre dossier indique que vous pouvez seulement appliquer pour un permis test."
            this.showAplyTestButton = true;
          }
          else if (data == 2){
            this.infoPermis = "Votre NASS est valide et votre dossier indique que vous pouvez seulement appliquer pour un permis vaccin."
            this.showAplySanteButton = true;
          }
          else if (data == -1) {
            this.infoPermis = "Votre NASS est valide mais votre dossier indique que vous ne pouvez faire une demande. Veuillez contacter le support."
            this.showAplyErrorButton = true;
          }
        });
      }
      this.showVerifyButton = false;
      
    });
  }

  public onReadyClick(direction: string) {
    this.router.navigateByUrl(direction, { state: { permis:  this.type_permis, num_social: this.num_social } });
    this.showVerifyButton = false;
    this.showAplySanteButton = true;
    this.showAplyTestButton = true;
  }
}
