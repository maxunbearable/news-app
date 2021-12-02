import { Component } from '@angular/core';
import {NewsApiService} from '../../service/newsapiservices.service';
import {BaseNewsComponent} from '../../base-news.component';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent extends BaseNewsComponent {
  category = 'sport';

  constructor(protected newsApiService: NewsApiService) {
    super(newsApiService);
  }
}
/*import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {
  pageIndex:number = 0;
  pageSize:number = 10;
  lowValue:number = 0;
  highValue:number = 10;
  sportnewsDisplay:any = [];
  totalResults = 0;
  q="";

  constructor(private _services:NewsapiservicesService) { }


  ngOnInit(): void {
    this._services.sportNews(this.pageIndex + 1, this.q).subscribe((result)=>{
      this.totalResults = result.totalResults;
        this.sportnewsDisplay = result.articles ;

    });
  }




  getPaginatorData(event:any){
    this.pageIndex = event.pageIndex;

    this._services.sportNews(this.pageIndex + 1, this.q).subscribe((result)=>{
      this.sportnewsDisplay = result.articles ;

  });
}
onKeyUp(search:any){
  this.q = search;
  this._services.sportNews(this.pageIndex + 1, this.q).subscribe((result)=>{
    this.sportnewsDisplay = result.articles ;
    this.totalResults = result.totalResults;

});

}
} */
