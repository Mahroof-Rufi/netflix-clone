import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesAPIService } from 'src/app/services/movies-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  movieDetails:any;
  movieTrailer:any;
  castDetails:any;

  constructor(private service:MoviesAPIService, private router:ActivatedRoute) {}

  ngOnInit(): void {
    let movieId = this.router.snapshot.paramMap.get('id');
    this.getMovieDetails(movieId);
    this.getCastDetails(movieId);
    this.getMovietrailer(movieId);
  }

  // get movie details
  getMovieDetails(id:any) {
    this.service.getMovieDetails(id).subscribe((res) => {
      this.movieDetails = res;
      console.log('movie details'+this.movieDetails);
            
    })
  }

  // get cast details
  getCastDetails(id:any) {
    this.service.getCastDetails(id).subscribe((res) => {
      this.castDetails = res.cast;
      console.log(this.castDetails);

    })
  }

  // get movie trailer
  getMovietrailer(id:any) {
    this.service.getMovieTrailer(id).subscribe((res) => {
      res.results.forEach((element:any) => {
        if (element.type == "Trailer") {
          this.movieTrailer = element.key;
        }
      });
    })
    console.log(this.movieTrailer);

  }

}
