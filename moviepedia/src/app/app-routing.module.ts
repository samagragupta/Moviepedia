import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';

const appRoutes: Routes = [
    {path: 'movies', component: MoviesComponent, children: [
        {path: ':id',component: MoviesDetailComponent}
    ]},
    {path: 'movielist', component: AllMoviesComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}