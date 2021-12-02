import { OnInit, Directive } from '@angular/core';
import {NewsApiService} from './service/newsapiservices.service';

@Directive()
export class BaseNewsComponent implements OnInit {
  pageIndex: number = 0;
  pageSize: number = 10;
  lowValue: number = 0;
  highValue: number = 10;
  news: any = [];
  totalResults = 0;
  search="";

  protected category!: string;

  constructor(protected newsApiService: NewsApiService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  onPagination(event:any){
    this.pageIndex = event.pageIndex;

    this.getArticles();
  }

   onKeyUp(search:any){
    this.search = search;

    this.getArticles();
  }

  private getArticles() {
    this.newsApiService.getNews(this.pageIndex + 1, this.search, this.category).subscribe((result)=>{
      this.news = result.articles ;
      this.totalResults = result.totalResults;
    });
  }
}
