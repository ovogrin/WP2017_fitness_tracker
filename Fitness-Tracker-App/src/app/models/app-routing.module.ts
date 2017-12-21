import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercisesComponent } from '../exercises/exercises.component';
import { GuideComponent } from '../guide/guide.component';
import { IndexComponent } from '../index/index.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { AuthGuard } from '../auth/auth-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'home', component: IndexComponent, canActivate: [AuthGuard] },
    { path: 'exercises', component: ExercisesComponent, canActivate: [AuthGuard] },
    { path: 'guide', component: GuideComponent, canActivate: [AuthGuard] },
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}