import { Component, OnInit } from '@angular/core';
import { CitizenEnfant } from 'src/app/models/citizen-enfant';

@Component({
  selector: 'app-dashboard-enfant',
  templateUrl: './dashboard-enfant.component.html',
  styleUrls: ['./dashboard-enfant.component.css']
})
export class DashboardEnfantComponent implements OnInit {
  citizenEnfant: CitizenEnfant;
  constructor() {}

  ngOnInit(): void {
    this.citizenEnfant = history.state.data;
  }
}
