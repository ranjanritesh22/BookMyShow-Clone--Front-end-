import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from '../models';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movieUrl = "https://ranjanritesh22.github.io/bookMyShow-movies-json/movies.json"

  constructor( private http : HttpClient) { }
  
  getMovies() : Observable<Movie[]> {
    return this.http.get<Movie[]>(this.movieUrl) 
  }
}