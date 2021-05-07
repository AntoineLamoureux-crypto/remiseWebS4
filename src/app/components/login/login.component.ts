import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Citizen } from 'src/app/models/citizen';
import { SubscribeService } from 'src/app/services/subscribe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  citizen: Citizen;
  validMessage: string = '';
  username: '';
  password : '';
  flag: boolean;


  constructor(private service: SubscribeService, private router: Router) { }

  ngOnInit(): void {
  }

  public login() {
      this.service.login(this.username, this.password).subscribe(
        (data) => {
          if (data != null){
          this.citizen = data;
          sessionStorage.setItem('username', this.username);
          sessionStorage.setItem('password', this.password);
          if (this.citizen != null) {
            this.router.navigateByUrl('/dashboard', {state: { data:  this.citizen }});
          }
        } else {
          this.validMessage = 'Please fill the form correctly'
        }
      });
    }
}
