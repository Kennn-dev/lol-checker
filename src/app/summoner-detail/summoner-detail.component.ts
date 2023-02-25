import { Component, Input } from '@angular/core';
import { LolService } from '../lol.service';
import { Summoner } from './../lol';

@Component({
  selector: 'app-summoner-detail',
  templateUrl: './summoner-detail.component.html',
  styleUrls: ['./summoner-detail.component.scss'],
})
export class SummonerDetailComponent {
  constructor(private lolService: LolService) {}
  @Input('data') data!: Summoner;

  ngOnInit() {}
  getAvatar() {
    return this.lolService.getProfileIcon(this.data.profileIconId);
  }
}
