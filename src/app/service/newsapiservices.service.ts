import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http: HttpClient) {}
    apiUrl ="https://newsapi.org/v2/top-headlines?country=us&apiKey=049efd659f08426293ef5346e1c5cf41&pageSize=10";
/*
    techApiUrl ="https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=049efd659f08426293ef5346e1c5cf41&pageSize=10";
    newsApiUrl='https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=049efd659f08426293ef5346e1c5cf41&pageSize=10';
    businessApiUrl='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=049efd659f08426293ef5346e1c5cf41&pageSize=10';
    entertainmentApiUrl='https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=049efd659f08426293ef5346e1c5cf41&pageSize=10';
    healthApiUrl='https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=049efd659f08426293ef5346e1c5cf41&pageSize=10';
    scienceApiUrl='https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=049efd659f08426293ef5346e1c5cf41&pageSize=10';
    sportApiUrl='https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=049efd659f08426293ef5346e1c5cf41&pageSize=10'; */

    getNews(page:any, search:any, category: string):Observable<any>
    {
      return this.http.get(this.apiUrl + `&page=${page}` + `&q=${search}` + '&category=${category})');
    }
/*
    topHeading(page:any, q:any):Observable<any>
    {
      return this._http.get(this.newsApiUrl + `&page=${page}` + `&q=${q}`);
    }

    techNews(page: any, q:any):Observable<any>
    {
      return this._http.get(this.techApiUrl + `&page=${page}` + `&q=${q}`);
    }

    businessNews(page: any, q:any):Observable<any>
    {
      return this._http.get(this.businessApiUrl +`&page=${page}` + `&q=${q}`);
    }
    entertainmentNews(page: any, q:any):Observable<any>
    {
      return this._http.get(this.entertainmentApiUrl + `&page=${page}` + `&q=${q}`);
    }
    healthNews(page: any, q:any):Observable<any>
    {
      return this._http.get(this.healthApiUrl + `&page=${page}` + `&q=${q}`);
    }
    scienceNews(page: any, q:any):Observable<any>
    {
      return this._http.get(this.scienceApiUrl + `&page=${page}` + `&q=${q}`);
    }
    sportNews(page: any, q:any):Observable<any>
    {
      return this._http.get(this.sportApiUrl + `&page=${page}` + `&q=${q}`);
    }
 */


   }
