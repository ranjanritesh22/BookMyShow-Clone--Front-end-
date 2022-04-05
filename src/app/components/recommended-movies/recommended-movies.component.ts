import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Movie } from '../../models';
import { MoviesService } from '../../services';

@Component({
  selector: 'app-recommended-movies',
  templateUrl: './recommended-movies.component.html',
})
export class RecommendedMoviesComponent implements OnInit {

  @ViewChild('slider', { read: ElementRef })
  public slider!: ElementRef<any>;
  
  movies : Movie[] = []
  btnPrev :boolean = false;
  btnNext : boolean = true;
  changeLeft : boolean = false;
  changeRight : boolean = true;

  constructor(private  movieService : MoviesService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(movies => this.movies = movies.slice(0,10));
  }
  
  public scrollLeft(): void {
    this.slider.nativeElement.scrollTo({ left: (this.slider.nativeElement.scrollLeft - 1320), behavior: 'smooth' });
    this.btnNext = true;
    this.btnPrev = false;
  }

  public scrollRight(): void {
    this.slider.nativeElement.scrollTo({ left: (this.slider.nativeElement.scrollLeft + 1320), behavior: 'smooth' });
    this.btnNext = false;
    this.btnPrev = true;
    this.changeLeft = true;
  }
}