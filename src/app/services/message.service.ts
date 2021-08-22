import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  msgGlobal!: string | undefined;
  msgErr!: string | undefined;

  constructor() { }

   sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

 async setMsgGlobal(msg:string){
    this.msgGlobal = msg;
    await this.sleep(5000);
    this.msgGlobal = undefined;
  }

  async setMsgErr(msg:string){
    this.msgErr = msg;
    await this.sleep(5000);
    this.msgErr = undefined;
  }
}
