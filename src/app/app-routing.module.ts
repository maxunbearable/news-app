import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './modules/business-news/business-news.component';
import { EntertainmentComponent } from './modules/entertainment/entertainment.component';
import { HealthComponent } from './modules/health/health.component';
import { ScienceComponent } from './modules/science/science.component';
import { SportComponent } from './modules/sport/sport.component';
import { TechnewsComponent } from './modules/tech-news/tech-news.component';
import { TopheadingComponent } from './modules/top-heading/top-heading.component';

const routes: Routes = [
  {path:'', component:TopheadingComponent},
  {path:'tech', component:TechnewsComponent},
  {path:'business', component:BusinessnewsComponent},
  {path:'entertainment', component:EntertainmentComponent},
  {path:'health', component:HealthComponent},
  {path:'sport', component:SportComponent},
  {path:'science', component:ScienceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
