import { Component, Input } from '@angular/core';
import { MatchDTO, ParticipantClient } from './../../lol';

@Component({
  selector: 'app-head-match',
  templateUrl: './head-match.component.html',
  styleUrls: ['./head-match.component.scss'],
})
export class HeadMatchComponent {
  @Input() match: MatchDTO | null = null;
  @Input() user: ParticipantClient | null = null;
}
