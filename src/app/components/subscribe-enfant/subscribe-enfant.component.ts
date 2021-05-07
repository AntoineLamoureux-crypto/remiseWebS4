import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Citizen } from 'src/app/models/citizen';
import { CitizenEnfant } from 'src/app/models/citizen-enfant';
import { DemandePermisEnfantService } from 'src/app/services/demande-permis-enfant.service';
import { SubscribeService } from 'src/app/services/subscribe';


@Component({
  selector: 'app-subscribe-enfant',
  templateUrl: './subscribe-enfant.component.html',
  styleUrls: ['./subscribe-enfant.component.css']
})
export class SubscribeEnfantComponent implements OnInit {
  [x: string]: any;

  citizenEnfant: CitizenEnfant
  citizen: Citizen
  validMessage: string = ''
  type_permisString: string = ''
  url: string = 'http://localhost:9090/permisSanteE'
  usernameReal: string = ''
  
  subscribeForm = new FormGroup({
    age : new FormControl('', Validators.required),
    nom : new FormControl('', Validators.required),
    num_social : new FormControl('', Validators.required),
    parentusername : new FormControl('', Validators.required),
    prenom : new FormControl('', Validators.required),
    sexe : new FormControl('', Validators.required),
    type_permis : new FormControl('', Validators.required),
  })
  http: any;

  constructor(private service: DemandePermisEnfantService, private subService: SubscribeService, private router: Router) { }

  ngOnInit(): void {

  }

  public onSubscribe() {
    this.subService.login(sessionStorage.getItem('username'), sessionStorage.getItem('password')).subscribe(
      (data) => {
        if (data != null){
        this.citizen = data;
        }
      if (this.subscribeForm.valid){
      this.service.saveEnfant(this.subscribeForm.value).subscribe((data) => {
          if (data != null){
          this.subscribeForm.reset();
          this.router.navigateByUrl('/dashboard', {state: { data: this.citizen }});
        } else {
          this.validMessage = 'Please fill the form correctly'
        }
      });
    }
  });
  }
}
