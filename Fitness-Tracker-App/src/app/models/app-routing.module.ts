import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercisesComponent } from '../exercises/exercises.component';
import { GuideComponent } from '../guide/guide.component';
import { IndexComponent } from '../index/index.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { SigninComponent } from '../auth/signin/signin.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: IndexComponent },
    { path: 'exercises', component: ExercisesComponent },
    { path: 'guide', component: GuideComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}