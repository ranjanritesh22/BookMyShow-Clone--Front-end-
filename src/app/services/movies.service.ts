import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models';
import { Movies } from '../mock-movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  allMovies : Movie[] = Movies;

  getMovies() : Observable<Movie[]> {
    const movies = this.allMovies;
    return of(movies);
  }
}