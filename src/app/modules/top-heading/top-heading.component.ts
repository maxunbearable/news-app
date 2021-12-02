/*import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.scss']
})
export class TopheadingComponent implements OnInit {
  pageIndex:number = 0;
  pageSize:number = 10;
  lowValue:number = 0;
  highValue:number = 10;
  topheadingDisplay:any = [];
  totalResults = 0;
  q="";


  constructor(private _services:NewsapiservicesService) { }



  ngOnInit(): void {
    this._services.topHeading(this.pageIndex + 1, this.q).subscribe((result) => {
      this.totalResults = result.totalResults;
      this.topheadingDisplay = result.articles;
    });
  }

  getPaginatorData(event:any){
    this.pageIndex = event.pageIndex;

    this._services.topHeading(this.pageIndex + 1, this.q).subscribe((result)=>{
      this.topheadingDisplay = result.articles ;

  });
}
  onKeyUp(search:any){
    this.q = search;
    this._services.topHeading(this.pageIndex + 1, this.q).subscribe((result)=>{
      this.topheadingDisplay = result.articles ;
      this.totalResults = result.totalResults;

  });


  }

} */

import { Component } from '@angular/core';
import {NewsApiService} from '../../service/newsapiservices.service';
import {BaseNewsComponent} from '../../base-news.component';

@Component({
  selector: 'app-topheading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.scss']
})
export class TopheadingComponent extends BaseNewsComponent {
  category = 'general';

  constructor(protected newsApiService: NewsApiService) {
    super(newsApiService);
  }

}
