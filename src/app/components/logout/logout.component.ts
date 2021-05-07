import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscribeService } from 'src/app/services/subscribe';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route: Router, private service: SubscribeService) { }

  ngOnInit(): void {

    //Je dois l'enlever de la session.
    //Comment ? Grace au services.
    this.service.logOut();
    this.route.navigate(['login']);
  }

}
