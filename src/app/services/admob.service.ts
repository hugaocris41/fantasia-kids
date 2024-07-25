import { Injectable } from '@angular/core';
import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';

@Injectable({
  providedIn: 'root'
})
export class AdmobService {

  constructor() {}

  async initializeAdMob() {
    const options: BannerAdOptions = {
      adId: 'ca-app-pub-3810718851636321/2161057342',
      adSize: BannerAdSize.BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      isTesting: true,
    };

    try {
      await AdMob.showBanner(options);
      console.log('Banner ad shown');
    } catch (err) {
      console.error('Failed to show banner ad:', err);
    }
  }
}
