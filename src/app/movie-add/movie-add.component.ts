import { Component, OnInit } from '@angular/core';
import {Movie} from "../Movie";
import {MovieService} from "../movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  movie:Movie = new Movie()
  constructor(
    private MovieService:MovieService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  addMovie(){
    this.MovieService.addMovie(this.movie).subscribe(()=>{
      alert("Add Successfully")
      this.router.navigate(['/list'])
    })
  }

}
