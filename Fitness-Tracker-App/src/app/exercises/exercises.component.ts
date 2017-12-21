import { Component, OnInit } from '@angular/core';

import { Exercise } from './exercise/exercise.model';
import { ExerciseService } from '../models/exercise.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
  providers: [ExerciseService]
})
export class ExercisesComponent implements OnInit {
  selectedExercise: Exercise;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exerciseService.exerciseSelected
      .subscribe(
        (exercise: Exercise) => {
          this.selectedExercise = exercise;
        }
      );
  }

}
