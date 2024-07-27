import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Historia } from 'src/app/model/historia';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Pipe({
  name: 'safe',
})

export class SafeFantasia implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-fantasia',
  templateUrl: './fantasia.page.html',
  styleUrls: ['./fantasia.page.scss'],
})
export class FantasiaPage implements OnInit {

  historias: Historia[] = [];
  isLoading: boolean = true;

  constructor( private db: FirebaseService, private spinner: NgxSpinnerService ) { }

  ngOnInit() {
   this.loadData();
  }

  loadData() {
    this.db.getFantasia().subscribe((data) => {
      this.spinner.show();
      this.historias = data;
      this.isLoading = false;
    });
  }
}
