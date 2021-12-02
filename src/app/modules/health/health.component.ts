import { Component } from '@angular/core';
import {NewsApiService} from '../../service/newsapiservices.service';
import {BaseNewsComponent} from '../../base-news.component';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent extends BaseNewsComponent {
  category = 'health';

  constructor(protected newsApiService: NewsApiService) {
    super(newsApiService);
  }
}
/*import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {
  pageIndex:number = 0;
  pageSize:number = 10;
  lowValue:number = 0;
  highValue:number = 10;
  healthnewsDisplay:any = [];
  totalResults = 0;
  q="";

  constructor(private _services:NewsapiservicesService) { }

  ngOnInit(): void {
    this._services.healthNews(this.pageIndex + 1, this.q).subscribe((result)=>{
      this.totalResults = result.totalResults;
        this.healthnewsDisplay = result.articles ;

    });
  }




  getPaginatorData(event:any){
    this.pageIndex = event.pageIndex;

    this._services.healthNews(this.pageIndex + 1, this.q).subscribe((result)=>{
      this.healthnewsDisplay = result.articles ;

  });
}
onKeyUp(search:any){
  this.q = search;
  this._services.healthNews(this.pageIndex + 1, this.q).subscribe((result)=>{
    this.healthnewsDisplay = result.articles ;
    this.totalResults = result.totalResults;

});

}
} */
