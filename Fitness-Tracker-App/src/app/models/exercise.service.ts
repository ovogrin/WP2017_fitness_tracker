import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { Exercise } from "../exercises/exercise/exercise.model";


@Injectable()
export class ExerciseService {
    exercisesChanged = new Subject<Exercise[]>();
    exerciseSelected = new EventEmitter<Exercise>();

    private exercises: Exercise[] = [
        new Exercise("Swimming","Swam 3 laps","assets/images/swimming.jpg"),
        new Exercise("Crunches", "25 Reps","assets/images/crunches.jpg")
      ];

    setExercises(exercises: Exercise[]){
        this.exercises = exercises;
        this.exercisesChanged.next(this.exercises.slice());
    }

    getExercises(){
        return this.exercises.slice();
    }

    getExercise(index: number){
        return this.exercises[index];
    }
}