import { Component } from '@angular/core';
import { AdmobService } from '../services/admob.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private admobService: AdmobService, private router: Router) {}

  ngOnInit() {
    this.admobService.initializeAdMob();
  }

  goToList(){
    this.router.navigateByUrl('lista');
  }

}
