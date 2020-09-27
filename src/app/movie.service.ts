import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import {Observable, of} from 'rxjs'
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({ /*Decoretor*/
  providedIn: 'root' //root modülü yani App modülü içinde herhangi bir yerden ulaşılabiir.
})
export class MovieService {

  private apiMovieUrl = 'api/movies';

  constructor(
    private loggingService: LoggingService,
    private http: HttpClient
    ) { }

  getMovies(): Observable<Movie[]> {
    this.loggingService.add('MovieService: listing movies');
    return this.http.get<Movie[]>(this.apiMovieUrl);
  }

  getMovie(id): Observable<Movie>{
    this.loggingService.add('MovieService: get detail by id'+ id);
    return this.http.get<Movie>(this.apiMovieUrl+'/'+id);
  }


}
