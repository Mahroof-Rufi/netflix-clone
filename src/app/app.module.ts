import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire/compat';
import { MovieDetailsComponent } from './home/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http'
import { MoviesAPIService } from './services/movies-api.service';
import { ToastrModule } from 'ngx-toastr'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [MoviesAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
