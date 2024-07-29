import { Injectable } from '@angular/core';
import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition, InterstitialDefinitions } from '@capacitor-community/admob';

@Injectable({
  providedIn: 'root'
})
export class AdmobService {

  constructor() {}

  async initializeAdMob() {
    const options: BannerAdOptions = {
      adId: 'ca-app-pub-3810718851636321/2161057342', 
      adSize: BannerAdSize.BANNER,
      position: BannerAdPosition.TOP_CENTER,
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

  public async showInterstitialAd() {
    try {
      await AdMob.prepareInterstitial({
        adId: 'ca-app-pub-3810718851636321/9935605588',
        isTesting: true,
      });

      await AdMob.showInterstitial();
      console.log('Interstitial ad shown');
    } catch (err) {
      console.error('Failed to show interstitial ad:', err);
    }
  }

}
