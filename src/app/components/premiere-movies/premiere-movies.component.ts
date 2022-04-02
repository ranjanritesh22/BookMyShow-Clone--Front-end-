import { Component, OnInit,ViewChild , ElementRef } from '@angular/core';
import { Movie } from '../../models';
import { MoviesService } from '../../services';

@Component({
  selector: 'app-premiere-movies',
  templateUrl: './premiere-movies.component.html',
})
export class PremiereMoviesComponent implements OnInit {

  @ViewChild('slider', { read: ElementRef })
  public slider!: ElementRef<any>;

  premieres : Movie[] = [];
  btnPrev :boolean = false;
  btnNext : boolean = true;
  changeLeft : boolean = false;
  changeRight : boolean = true;

  constructor( private movieService : MoviesService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(premieres => this.premieres = premieres.slice(10,18))
  }

  public scrollLeft(): void {
    this.slider.nativeElement.scrollTo({ left: (this.slider.nativeElement.scrollLeft - 1320), behavior: 'smooth' });
    this.btnNext = true;
    this.btnPrev = false;
  }

  public scrollRight(): void {
    this.slider.nativeElement.scrollTo({ left: (this.slider.nativeElement.scrollLeft + 790), behavior: 'smooth' });
    this.btnNext = false;
    this.btnPrev = true;
    this.changeLeft = true;
  }

}
