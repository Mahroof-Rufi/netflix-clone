import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { MoviesAPIService } from '../services/movies-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit{

  navbg:any;

  constructor(private movieServ:MoviesAPIService) {}


  bannerResult: any[] = [];
  trendingResult: any[] = [];
  actionResult: any[] = [];
  adventureResult: any[] = [];
  animationResult: any[] = [];
  comedyResult: any[] = [];
  documentaryResult: any[] = [];
  sciFictionResult: any[] = [];
  thrillerMoviesResult: any[] = [];
  romanceMoviesResult: any[] = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingMoviesData();
    this.actionMoviesData();
    this.romanceMoviesData();
    this.adventureMoviesData();
    this.animationMoviesData();
    this.comedyMoviesData();
    this.documentariesData();
    this.sciFictionMoviesData();
    this.thrillerMoviesData();
  }

  // banner data
  bannerData() {
    this.movieServ.bannerApiData().subscribe((res) => {
      this.bannerResult = res.results;
    });
  }

  // trending movies data
  trendingMoviesData() {
    this.movieServ.trendingMoviesData().subscribe((res) => {
      this.trendingResult = res.results;
    });
  }

  // action movies data
  actionMoviesData() {
    this.movieServ.actionMoviesData().subscribe((res) => {
      this.actionResult = res.results;
    })
  }

  // romance movies data
  romanceMoviesData() {
    this.movieServ.romanceMoviesData().subscribe((res) => {
      this.romanceMoviesResult = res.results;
    })
  }

  // adventure movies data
  adventureMoviesData() {
    this.movieServ.adventureMoviesData().subscribe((res) => {
      this.adventureResult = res.results;
    })
  }

  // animation movies data
  animationMoviesData() {
    this.movieServ.animationMoviesData().subscribe((res) => {
      this.animationResult = res.results;
    })
  }

  // comedy movies data
  comedyMoviesData() {
    this.movieServ.comedyMoviesData().subscribe((res) => {
      this.comedyResult = res.results;
    })
  }

  // documentary data
  documentariesData() {
    this.movieServ.documentaryMoviesData().subscribe((res) => {
      this.documentaryResult = res.results;
    })
  }

  // sci-fiction data 
  sciFictionMoviesData() {
    this.movieServ.scienceFictionMoviesData().subscribe((res) => {
      this.sciFictionResult = res.results
    })
  }

  // thriller movies data
  thrillerMoviesData() {
    this.movieServ.thrillerMoviesData().subscribe((res) => {
      this.thrillerMoviesResult = res.results
    })
  }
}
