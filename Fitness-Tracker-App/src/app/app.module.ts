import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GuideComponent } from './guide/guide.component';
import { ServerComponent } from './server/server.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseComponent } from './exercises/exercise/exercise.component';
import { ExerciseListComponent } from './exercises/exercise-list/exercise-list.component';
import { ExerciseDetailComponent } from './exercises/exercise-detail/exercise-detail.component';
import { DropdownDirective } from './models/dropdown.directive';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './models/app-routing.module';
import { ExerciseStartComponent } from './exercises/exercise-start/exercise-start.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { ExerciseService } from './models/exercise.service';
import { DataStorageService } from './models/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GuideComponent,
    ServerComponent,
    ExercisesComponent,
    ExerciseComponent,
    ExerciseListComponent,
    ExerciseDetailComponent,
    DropdownDirective,
    IndexComponent,
    ExerciseStartComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService, ExerciseService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
