import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Historias {
  id?: string;
  titulo?: string;
  img?: string;
  audio?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  getAcao(): Observable<Historias[]> {
    return this.firestore.collection<Historias>('acao').valueChanges({ idField: 'id' });
  }
 

}
