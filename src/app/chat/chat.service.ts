import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
//import { ApiAiClient } from 'node_modules/api-ai-javascript/ts/ApiAiClient';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  //readonly token = environment.dialogflow.angularBot;
  //readonly client =  new ApiAiClient({accessToken:this.token});

  constructor() {
   }

  /*
  talk(){
    this.client.textRequest('Who are you!').then(res=>console.log(res));
  }
  */
}
