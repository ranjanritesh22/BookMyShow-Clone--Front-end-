import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'
import { AllMoviesComponent, HomeComponent, MoviesDetailComponent } from './components';

const routes : Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' }, 
 { path : 'home' , component : HomeComponent },
 { path : 'movies-details' , component : MoviesDetailComponent },
 { path : 'movies' , component : AllMoviesComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }