import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models';
import { MoviesService } from '../../services';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
})
export class AllMoviesComponent implements OnInit {

  languageModal : boolean = false;
  genreModal : boolean = false;
  allMovies : Movie[] = [];
  allMovieList: Movie[] = [];
  languages : any[]   = []
  langBtn : any[] = [];
  selectedLanguages : any[] = []
  genres : any[] = []
  genreBtn : any[] = [];
  selectedGenres : any[] = [];


  constructor( private movieService : MoviesService) { }

  ngOnInit(): void {
    this.getAllMovies();
    this.allMovies = this.allMovieList;
    this.allMovies.forEach(genre => {
      genre.genre.forEach(e=> {
        if(this.genres.indexOf(e) === -1){
          this.genres.push(e);
          this.genreBtn.push(false);
        }
      })
    })
    this.allMovies.forEach(movie => {
      movie.language.forEach(e => {
        if (this.languages.indexOf(e) === -1) {
          this.languages.push(e);
          this.langBtn.push(false)
        }
      })
    })
  }

  getAllMovies(){
    this.movieService.getMovies().subscribe(allMovies =>{ 
      this.allMovieList = allMovies;
      this.allMovies = this.allMovieList;
    });
  }

  searchMoviesByLanguage(){
    this.allMovies = []
    this.allMovieList.forEach(movie=>{
      for(let i = 0 ; i< this.selectedLanguages.length; i++){
        if(movie.language.includes(this.selectedLanguages[i])){
          this.allMovies.push(movie);
          break;
        }
      }
    })
  }

  searchMoviesByGenre(){
    this.allMovies = []
    this.allMovieList.forEach(genre=>{
      for(let i = 0 ; i< this.selectedGenres.length; i++){
        if(genre.genre.includes(this.selectedGenres[i])){
          this.allMovies.push(genre);
          break;
        }
      }
    })

  }

  selectedLanguageBtn(lang : string , index:any){
    this.selectedLanguages = []
    this.langBtn[index]=!this.langBtn[index]
    for(let i = 0 ; i<this.langBtn.length ; i++){
      if(this.langBtn[i]){
        this.selectedLanguages.push(this.languages[i])
      }
    }
    if(this.selectedLanguages.length != 0){
      this.searchMoviesByLanguage();
    }
    else{
      this.allMovies = this.allMovieList;
    }
  }

  selectedGenreBtn(index : any){
    this.selectedGenres = []
    this.genreBtn[index]=!this.genreBtn[index]
    for(let i = 0 ; i<this.genreBtn.length ; i++){
      if(this.genreBtn[i]){
        this.selectedGenres.push(this.genres[i])
      }
    }
    if(this.selectedGenres.length != 0){
      this.searchMoviesByGenre();
    }
    else{
      this.allMovies = this.allMovieList;
    }

  }

  clearAll(){
    for(let i = 0 ; i< this.langBtn.length ; i++){
      this.langBtn[i] = false;
    }
    for(let i = 0 ; i< this.genreBtn.length ; i++){
      this.genreBtn[i] = false;
    }
    this.allMovies = this.allMovieList;
  }
}


