import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { Exercise } from "../exercises/exercise/exercise.model";


@Injectable()
export class ExerciseService {
    exercisesChanged = new Subject<Exercise[]>();
    exerciseSelected = new EventEmitter<Exercise>();

    public exercises: Exercise[] = [
        new Exercise("Bicycle","","assets/images/bicycle.jpg"),
        new Exercise("Burpees", "","assets/images/burpees.jpg"),
        new Exercise("Crunches","","assets/images/crunches.jpg"),
        new Exercise("Lunges", "","assets/images/lunges.jpg"),
        new Exercise("Plank","","assets/images/plank.jpg"),
        new Exercise("Pushups", "","assets/images/pushups.jpg"),
        new Exercise("Running","","assets/images/running.jpeg"),
        new Exercise("Squats", "","assets/images/squats.jpg")
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