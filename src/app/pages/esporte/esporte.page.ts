import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Historia } from 'src/app/model/historia';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdmobService } from 'src/app/services/admob.service';

@Pipe({
  name: 'safe',
})

export class SafeEsporte implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-esporte',
  templateUrl: './esporte.page.html',
  styleUrls: ['./esporte.page.scss'],
})
export class EsportePage implements OnInit {

  historias: Historia[] = [];
  isLoading: boolean = true;

   constructor( private db: FirebaseService, private spinner: NgxSpinnerService, private admobService: AdmobService ) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    try {
      await this.admobService.showInterstitialAd();
     
      this.db.getEsporte().subscribe((data) => {
        this.spinner.show();
        this.historias = data;
        this.isLoading = false;
        this.spinner.hide(); 
      });
    } catch (error) {
      console.error('Error showing ad:', error);
      this.spinner.hide();
    }
  }

}
