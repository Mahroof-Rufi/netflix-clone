import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MoviesAPIService {

  constructor(private http:HttpClient) { }

  //get banner data
  bannerApiData():Observable<any> {
    return this.http.get(`${environment.baseURL}/trending/all/week?api_key=${environment.apiKey}`)
  }

  //get movie details
  getMovieDetails(id:any):Observable<any> {
    return this.http.get(`${environment.baseURL}/movie/${id}?api_key=${environment.apiKey}`);
  }

  // get movie cast details
  getCastDetails(id:any):Observable<any> {
    return this.http.get(`${environment.baseURL}/movie/${id}/credits?api_key=${environment.apiKey}`);
  }

  // get movie trailer
  getMovieTrailer(id:any):Observable<any> {
    return this.http.get(`${environment.baseURL}/movie/${id}/videos?api_key=${environment.apiKey}`);
  }

  // fetch movies category base
  // get trending movies data
  trendingMoviesData():Observable<any> {
    return this.http.get(`${environment.baseURL}/trending/movie/day?api_key=${environment.apiKey}`);
  }

  // get action movies data
  actionMoviesData():Observable<any> {
    return this.http.get(`${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&language=en-US&sort_by=release_date.desc&page=1&with_genres=28`);
  }

  // get romance movies data
  romanceMoviesData():Observable<any> {
    return this.http.get(`${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&language=en-US&sort_by=release_date.desc&page=1&with_genres=10749`);
  }

  // get adventure movies data
  adventureMoviesData():Observable<any> {
    return this.http.get(`${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&language=en-US&sort_by=release_date.desc&page=1&with_genres=12`);
  }

  // get animation movies data
  animationMoviesData():Observable<any> {
    return this.http.get(`${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&language=en-US&sort_by=release_date.desc&page=1&with_genres=16`);
  }

  // get comedy movies data
  comedyMoviesData():Observable<any> {
    return this.http.get(`${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&language=en-US&sort_by=release_date.desc&page=1&with_genres=35`);
  }

  // get documentary movies data
  documentaryMoviesData():Observable<any> {
    return this.http.get(`${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&language=en-US&sort_by=release_date.desc&page=1&with_genres=99`);
  }

  // get science-fiction movies data
  scienceFictionMoviesData():Observable<any> {
    return this.http.get(`${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&language=en-US&sort_by=release_date.desc&page=1&with_genres=878`);
  }

  // get thriller movies data
  thrillerMoviesData():Observable<any> {
    return this.http.get(`${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&language=en-US&sort_by=release_date.desc&page=1&with_genres=53`);
  }
}
