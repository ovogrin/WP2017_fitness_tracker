import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { GuideComponent } from './guide/guide.component';
import { ServerComponent } from './server/server.component';
import { SignupComponent } from './signup/signup.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseComponent } from './exercises/exercise/exercise.component';
import { ExerciseListComponent } from './exercises/exercise-list/exercise-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    GuideComponent,
    ServerComponent,
    SignupComponent,
    ExercisesComponent,
    ExerciseComponent,
    ExerciseListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
