import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieAddComponent} from "./movie-add/movie-add.component";
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";

const routes: Routes = [
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'list',component:MovieListComponent},
  {path:'add',component:MovieAddComponent},
  {path:'details/:id',component:MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
