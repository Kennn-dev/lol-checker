import { Component, Input } from '@angular/core';
import { ParticipantClient } from './../../lol';

@Component({
  selector: 'app-kda',
  templateUrl: './kda.component.html',
  styleUrls: ['./kda.component.scss'],
})
export class KdaComponent {
  @Input() user: ParticipantClient | null = null;
}
