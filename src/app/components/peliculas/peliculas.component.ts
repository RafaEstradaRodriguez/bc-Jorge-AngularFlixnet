import { Component, OnInit } from '@angular/core';
import { MoviesService, Movie } from '../../servicios/movies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html'
})
export class PeliculasComponent implements OnInit {

  peliculas: Movie[] = [];

  constructor( private _moviesService: MoviesService,
               private router: Router
                ) {
  }

  ngOnInit() {
    this._moviesService.getMovies().subscribe(datos => this.peliculas = datos);
  }

}
