import { Component, Input } from '@angular/core';
import { LolService } from 'src/app/lol.service';
import { MatchDTO, ParticipantClient } from './../lol';

@Component({
  selector: 'app-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.scss'],
})
export class MatchItemComponent {
  @Input() matchData: MatchDTO | null = null;
  @Input('puuid') puuid: string | null = null;
  user: ParticipantClient | null = null;

  constructor(private lolService: LolService) {}

  ngOnInit() {
    this.formatData();
  }
  formatData() {
    console.log('MATCH DATA', this.matchData);
    if (this.puuid) {
      let user: ParticipantClient | undefined =
        this.matchData?.info.participants.find((p) => p.puuid === this.puuid);

      if (user) {
        const spell1Icon = this.lolService.getSpellInfo(user.summoner1Id)?.image
          .full;
        const spell2Icon = this.lolService.getSpellInfo(user.summoner2Id)?.image
          .full;
        const rune1 = this.lolService.findRuneDataWithId(
          user.perks.styles[0].selections[0].perk
        );
        const rune2 = this.lolService.findRuneDataWithId(
          user.perks.styles[1].style
        );
        console.log({
          spell1Icon,
          spell2Icon,
          rune1,
          rune2,
        });

        this.user = {
          ...user,
          championAvatar: this.lolService.getChampionAvatar(user.championName),
          spell1Icon,
          spell2Icon,
          rune1,
          rune2,
          item0: this.lolService.getDdragonItemImage(user?.item0),
          item1: this.lolService.getDdragonItemImage(user?.item1),
          item2: this.lolService.getDdragonItemImage(user?.item2),
          item3: this.lolService.getDdragonItemImage(user?.item3),
          item4: this.lolService.getDdragonItemImage(user?.item4),
          item5: this.lolService.getDdragonItemImage(user?.item5),
          item6: this.lolService.getDdragonItemImage(user?.item6),
        };
        console.log({ user: this.user });
      }
    }
  }
}
