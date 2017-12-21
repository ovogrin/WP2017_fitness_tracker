import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../models/data-storage.service';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public dataStorageService: DataStorageService,
              public authService: AuthService){

              }

  onSaveData(){
    this.dataStorageService.storeExercises()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData(){
    this.dataStorageService.getExercises();
  }

  onLogout(){
    this.authService.logout();
  }
}
