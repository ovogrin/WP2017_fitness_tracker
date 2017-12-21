import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { ExerciseService } from './exercise.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
                private exerciseService: ExerciseService,
                private authService: AuthService){}

    storeExercises(){
        const token = this.authService.getToken();        
        return this.http.put('https://fitness-tracking-app.firebaseio.com/exercises.json?auth=' + token, this.exerciseService.getExercises());
    }

    getExercises(){
        const token = this.authService.getToken();

        this.http.get('https://fitness-tracking-app.firebaseio.com/exercises.json?auth=' + token)
            .subscribe(
                (response: Response) => {
                    const exercises = response.json();
                    this.exerciseService.setExercises(exercises);
                }
            );
    }
}