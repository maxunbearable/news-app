import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './modules/top-heading/top-heading.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsApiService} from './service/newsapiservices.service';
import { TechnewsComponent } from './modules/tech-news/tech-news.component';
import { BusinessnewsComponent } from './modules/business-news/business-news.component';
import { EntertainmentComponent } from './modules/entertainment/entertainment.component';
import { HealthComponent } from './modules/health/health.component';
import { ScienceComponent } from './modules/science/science.component';
import { SportComponent } from './modules/sport/sport.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,

    TopheadingComponent,
    TechnewsComponent,
    BusinessnewsComponent,
    EntertainmentComponent,
    HealthComponent,
    ScienceComponent,
    SportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
