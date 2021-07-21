import { Component, OnInit } from '@angular/core';
import {Movie} from "../Movie";
import {MovieService} from "../movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie:Movie
  constructor(
    private MovieService:MovieService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getMovie()
  }

  getMovie(){
    this.route.params.subscribe(param=>{
      this.MovieService.getMovie(param.id).subscribe(data=>{
        this.movie = data
      })
    })
  }

}
