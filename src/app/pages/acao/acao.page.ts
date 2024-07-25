import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Historia } from 'src/app/model/historia';
import { FirebaseService } from 'src/app/services/firebase.service';

@Pipe({
  name: 'safe',
})

export class SafeAcao implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-acao',
  templateUrl: './acao.page.html',
  styleUrls: ['./acao.page.scss'],
})

export class AcaoPage implements OnInit { 

  historias: Historia[] = [];

  constructor( private db: FirebaseService ) { }

  ngOnInit() {
    this.db.getAcao().subscribe((data) => {
      this.historias = data;
    });
  }

}
