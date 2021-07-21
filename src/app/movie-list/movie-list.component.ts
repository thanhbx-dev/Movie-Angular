import {Component, OnInit} from '@angular/core';
import {Movie} from "../Movie";
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[]

  constructor(
    private MovieService: MovieService
  ) {
  }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    this.MovieService.getMovies().subscribe(data => {
      this.movies = data
    })
  }

  async removeMovie(id: number) {
    await alert("Do you want Movie")
    this.MovieService.removeMovie(id).subscribe(() => {
      this.movies = this.movies.filter(mov => mov.id !== id)
    })
  }

}
