import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitizenService } from 'src/app/services/citizen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private serviceRequest: CitizenService, private router: Router) { }

  ngOnInit(): void {
  }

  public onReadyClick(direction: string) {
    this.router.navigateByUrl(direction);
  }
}
