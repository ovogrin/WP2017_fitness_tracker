import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from './exercise.model';
import { ExerciseService } from '../../models/exercise.service';


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  @Input() exercise: Exercise;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
  }

  onSelected(){
    this.exerciseService.exerciseSelected.emit(this.exercise)
  }

}
