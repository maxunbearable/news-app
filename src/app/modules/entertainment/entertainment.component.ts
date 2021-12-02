import { Component } from '@angular/core';
import {NewsApiService} from '../../service/newsapiservices.service';
import {BaseNewsComponent} from '../../base-news.component';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent extends BaseNewsComponent {
  category = 'entertainment';

  constructor(protected newsApiService: NewsApiService) {
    super(newsApiService);
  }
}
/*import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {
  pageIndex:number = 0;
  pageSize:number = 10;
  lowValue:number = 0;
  highValue:number = 10;
  entertainmentnewsDisplay:any = [];
  totalResults = 0;
  q="";

  constructor(private _services:NewsapiservicesService) { }


  ngOnInit(): void {
    this._services.entertainmentNews(this.pageIndex + 1, this.q).subscribe((result)=>{
      this.totalResults = result.totalResults;
        this.entertainmentnewsDisplay = result.articles ;

    });
  }




  getPaginatorData(event:any){
    this.pageIndex = event.pageIndex;

    this._services.entertainmentNews(this.pageIndex + 1, this.q).subscribe((result)=>{
      this.entertainmentnewsDisplay = result.articles ;

  });
}
onKeyUp(search:any){
  this.q = search;
  this._services.entertainmentNews(this.pageIndex + 1, this.q).subscribe((result)=>{
    this.entertainmentnewsDisplay = result.articles ;
    this.totalResults = result.totalResults;

});

}
} */
