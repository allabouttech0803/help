import { Component } from '@angular/core';
import * as firebase from 'firebase/app';


const config = {
  webAPIKey:'AIzaSyCGIEAf_mvX-dIt-h-fR4SkjWYEiFISi7I', //Web API Key for firebase realtime cloud database
  dataBaseURl:'https://angularchat-9320f.firebaseio.com' //Data Base URL for firebase realtime cloud database
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatbot';

  constructor(){
    //Initializing FireBase configuration settings.
    firebase.initializeApp(config);
  }
}
