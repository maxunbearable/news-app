import { Component, OnInit } from '@angular/core';
import {NewsApiService} from '../../service/newsapiservices.service';
import {BaseNewsComponent} from '../../base-news.component';

@Component({
  selector: 'app-businessnews',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.scss']
})
export class BusinessnewsComponent extends BaseNewsComponent {
  category = 'business';

  constructor(protected newsApiService: NewsApiService) {
    super(newsApiService);
  }
}
