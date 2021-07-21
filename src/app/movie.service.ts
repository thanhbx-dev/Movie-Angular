import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "./Movie";
import {retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  API:string='https://60f02c43f587af00179d3db4.mockapi.io/movie'
  constructor(
    private http:HttpClient
  ) { }

  getMovies():Observable<Movie[]>{
    return  this.http.get<Movie[]>(this.API)
  }

  getMovie(id:number):Observable<Movie>{
    return this.http.get<Movie>(`${this.API}/${id}`)
  }
  addMovie(item:Movie):Observable<Movie>{
    return this.http.post<Movie>(this.API,item)
  }
  removeMovie(id:number):Observable<Movie>{
    return this.http.delete<Movie>(`${this.API}/${id}`)
  }
}
