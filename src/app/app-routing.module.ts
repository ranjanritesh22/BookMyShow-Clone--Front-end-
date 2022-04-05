import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'
import { HomeComponent, MoviesDetailComponent } from './components';

const routes : Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' }, 
 { path : 'home' , component : HomeComponent },
 { path : 'movies' , component : MoviesDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }