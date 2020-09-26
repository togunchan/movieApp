import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import {Observable, of} from 'rxjs'

@Injectable({ /*Decoretor*/
  providedIn: 'root' //root modülü yani App modülü içinde herhangi bir yerden ulaşılabiir.
})
export class MovieService {

  constructor() { }

  getMovies(): Observable<Movie[]> {
    return of(Movies);
  }
}
