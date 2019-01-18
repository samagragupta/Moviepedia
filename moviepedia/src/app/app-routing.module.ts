import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';

const appRoutes: Routes = [
    {path: 'movies', component: MoviesComponent},
    {path: 'movielist', component: AllMoviesComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}