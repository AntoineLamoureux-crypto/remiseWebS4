import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Citizen } from 'src/app/models/citizen';
import { SubscribeService } from 'src/app/services/subscribe';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  citizen: Citizen
  validMessage: string = ''
  type_permisString: string = ''
  url: string = 'http://localhost:9090/permisSante'
  
  subscribeForm = new FormGroup({
    password : new FormControl('', Validators.required),
    username : new FormControl('', Validators.required),
    age : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    nom : new FormControl('', Validators.required),
    num_social : new FormControl('', Validators.required),
    num_telphone : new FormControl('', Validators.required),
    prenom : new FormControl('', Validators.required),
    sexe : new FormControl('', Validators.required),
    type_permis : new FormControl('', Validators.required)
  })
  http: any;

  constructor(private service: SubscribeService, private router: Router) { }

  ngOnInit(): void {
    this.citizen = history.state;
  }

  public onSubscribe() {
    if (this.subscribeForm.valid){
      this.service.save(this.subscribeForm.value).subscribe((data) => {
          if (data != null){
          this.subscribeForm.reset();
          this.router.navigateByUrl('/dashboard', {state: data});
        } else {
          this.validMessage = 'Please fill the form correctly'
        }
      });
    }
  }
}
