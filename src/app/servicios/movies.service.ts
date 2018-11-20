import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class MoviesService {

  private movies:Movie[] = [
    {
      nombre: "Casablanca",
      bio: "A cynical nightclub owner protects an old flame and her husband from Nazis in Morocco.",
      img: "assets/img/casablanca.jpg",
      aparicion: "1942"
    },
    {
      nombre: "Blade Runner",
      bio: "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
      img: "assets/img/blade_runner.jpg",
      aparicion: "1982"
    },
    {
      nombre: "Golpe en la pequeña China",
      bio: "A rough-and-tumble trucker helps rescue his friend's fiance from an ancient sorcerer in a supernatural battle beneath Chinatown.",
      img: "assets/img/golpe_pequena_china.jpg",
      aparicion: "1986"
    },
    {
      nombre: "Zoolander",
      bio: "At the end of his career, a clueless fashion model is brainwashed to kill the Prime Minister of Malaysia.",
      img: "assets/img/zoolander.jpg",
      aparicion: "2001"
    },
    {
      nombre: "Pesadilla en Elm Street",
      bio: "The monstrous spirit of a slain janitor seeks revenge by invading the dreams of teenagers whose parents were responsible for his untimely death.",
      img: "assets/img/pesadilla_elm_street.jpg",
      aparicion: "1986"
    }
  ];

  url = 'http://localhost:4200/assets/peliculas.json';
  constructor(private http: HttpClient) { }

  getMovies() {
    // any[] devuelve un array de cualquier tipo
    return this.http.get<any[]>(this.url);
  }

}


export interface Movie{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
};
