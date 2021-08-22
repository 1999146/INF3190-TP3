import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private httpClient: HttpClient) {  }

log(message: string){
    this.httpClient.post('https://logger-inf3190-tp3-default-rtdb.firebaseio.com/logs.json', {message: message})
      .subscribe(
        () => {
          //console.log(message)
          console.log('Message envoye !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}

}
