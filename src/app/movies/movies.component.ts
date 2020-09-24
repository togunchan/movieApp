import { Component } from '@angular/core';
import { Movie } from '../movie';

@Component({
    selector: 'movies', // <movies></movies>
    templateUrl: 'movies.component.html'
})
export class MoviesComponent {
    title = 'Movie List'

    //obje oluşturuyoruz
    movie: Movie = {
        id: 1,
        name: 'Movie Name'

    }

    getTitle() {
        return this.title;
    }
}