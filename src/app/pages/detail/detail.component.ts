import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueEntry, MatchDTO, Summoner } from 'src/app/lol';
import { LolService } from 'src/app/lol.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  constructor(private route: ActivatedRoute, private lolService: LolService) {}
  queues: LeagueEntry[] = [];
  user: Summoner | null = null;
  matches: MatchDTO[] = [];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    console.log(id);
    this.getData(id);
  }

  getData(id: string) {
    this.lolService.getLeagueSummoner(id).subscribe({
      next: (value) => {
        const modifiedQ = value
          .map((v) => ({
            ...v,
            tierImage: this.lolService.getRankImagePath(v.tier),
          }))
          .reverse();
        this.queues = modifiedQ;
        console.log(modifiedQ);
      },
    });
    this.lolService.getInfoSummoner(id).subscribe({
      next: (value) => {
        console.log(value);
        if (value) {
          const resUser = {
            ...value,
            avatar: this.lolService.getProfileIcon(value.profileIconId),
          };
          this.user = resUser;
          this.matches = this.lolService.getMatchesByPuuid(resUser.puuid);
          console.log(this.user);
        }
      },
    });
  }
}
