import { Component } from '@angular/core';
import {NewsApiService} from '../../service/newsapiservices.service';
import {BaseNewsComponent} from '../../base-news.component';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent extends BaseNewsComponent {
  category = 'science';

  constructor(protected newsApiService: NewsApiService) {
    super(newsApiService);
  }


}
/*import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent implements OnInit {
  pageIndex:number = 0;
  pageSize:number = 10;
  lowValue:number = 0;
  highValue:number = 10;
  siencenewsDisplay:any = [];
  totalResults = 0;
  q="";

  constructor(private _services:NewsapiservicesService) { }



  ngOnInit(): void {
    this._services.scienceNews(this.pageIndex + 1, this.q).subscribe((result)=>{
      this.totalResults = result.totalResults;
        this.siencenewsDisplay = result.articles ;

    });
  }




  getPaginatorData(event:any){
    this.pageIndex = event.pageIndex;

    this._services.scienceNews(this.pageIndex + 1, this.q).subscribe((result)=>{
      this.siencenewsDisplay = result.articles ;

  });
}
onKeyUp(search:any){
  this.q = search;
  this._services.scienceNews(this.pageIndex + 1, this.q).subscribe((result)=>{
    this.siencenewsDisplay = result.articles ;
    this.totalResults = result.totalResults;

});

}
} */
