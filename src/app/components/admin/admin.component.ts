import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loadedFeature = 'managecourse';
  valid: any;

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  
  constructor() {
  }
  
  ngOnInit() {
  }
  

  
}
