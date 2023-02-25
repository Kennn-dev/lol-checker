import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Summoner } from 'src/app/lol';
import { LolService } from 'src/app/lol.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private readonly lolService: LolService) {}
  title = 'lol-checker-web';
  summoner: Summoner | null = null;
  onFinish(values: NgForm) {
    const query: string = values.value.query;
    // console.log(query);

    this.lolService.searchSummoner(query).subscribe({
      next: (value) => {
        this.summoner = value;
      },
      error(err) {
        console.log(err);
      },
    });
    // handle error response , no data here
  }
}
