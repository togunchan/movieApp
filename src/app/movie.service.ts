import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource'

@Injectable({ /*Decoretor*/
  providedIn: 'root' //root modülü yani App modülü içinde herhangi bir yerden ulaşılabiir.
})
export class MovieService {

  constructor() { }

  getMovies(): Movie[] {
    return Movies;
  }
}
