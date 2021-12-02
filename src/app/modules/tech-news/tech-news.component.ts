import { Component } from '@angular/core';
import {NewsApiService} from '../../service/newsapiservices.service';
import {BaseNewsComponent} from '../../base-news.component';

@Component({
  selector: 'app-technews',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.scss']
})
export class TechnewsComponent extends BaseNewsComponent {
  category = 'technology';

  constructor(protected newsApiService: NewsApiService) {
    super(newsApiService);
  }
}
/*import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';


@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.scss']
})
export class TechnewsComponent implements OnInit {
  pageIndex:number = 0;
  pageSize:number = 10;
  lowValue:number = 0;
  highValue:number = 10;
  technewsDisplay:any = [];
  totalResults = 0;
  q="";


  constructor(private _services:NewsapiservicesService) { }

  ngOnInit(): void {
    this._services.techNews(this.pageIndex + 1, this.q).subscribe((result)=>{
      this.totalResults = result.totalResults;
        this.technewsDisplay = result.articles ;

    });
  }




  getPaginatorData(event:any){
    this.pageIndex = event.pageIndex;

    this._services.techNews(this.pageIndex + 1, this.q).subscribe((result)=>{
      this.technewsDisplay = result.articles ;

  });
}
onKeyUp(search:any){
  this.q = search;
  this._services.techNews(this.pageIndex + 1, this.q).subscribe((result)=>{
    this.technewsDisplay = result.articles ;
    this.totalResults = result.totalResults;

});


}
} */
