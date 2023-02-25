import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummonerDetailComponent } from './summoner-detail/summoner-detail.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { MatchItemComponent } from './match-item/match-item.component';
import { KdaComponent } from './components/kda/kda.component';
import { HeadMatchComponent } from './components/head-match/head-match.component';

@NgModule({
  declarations: [AppComponent, SummonerDetailComponent, DetailComponent, HomeComponent, MatchItemComponent, KdaComponent, HeadMatchComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
