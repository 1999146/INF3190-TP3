import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  msgGlobal!: string | undefined;

  constructor() { }

   sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

 async setMsgGlobal(msg:string){
    this.msgGlobal = msg;
    await this.sleep(5000);
    this.msgGlobal = undefined;
  }
}
