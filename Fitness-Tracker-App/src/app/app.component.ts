import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'home';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyA3ewPTVDbpkddIZQ20gyG_glrP7Y-GjoY",
      authDomain: "fitness-tracking-app.firebaseapp.com"
    });
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }


}
