import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models';
import { Movies } from '../mock-movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  allMovies : Movie[] = Movies;

  constructor() { }
  
  getMovies() : Observable<Movie[]> {
    const movies = this.allMovies;
    return of(movies);
  }
}