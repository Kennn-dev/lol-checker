import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LeagueEntry, MatchDTO, Summoner, TIER } from './lol';

@Injectable({
  providedIn: 'root',
})
export class LolService {
  constructor(private http: HttpClient) {
    this.initLoadPatchData();
  }

  spellList: any[] = [];
  runeList: any[] = [];
  patch = '';
  ddragonUrl = environment.dataDragonUrl;
  headers: HttpHeaders['headers'] = {};

  loadSpellData(patch: string) {
    this.http
      .get<any>(`${this.getDdragonUrl(patch)}/data/en_US/summoner.json`)
      .subscribe({
        next: (value) => {
          console.log('SPELL', value.data);
          const rs: any[] = Object.keys(value.data).map((key) => ({
            ...value.data[key],
          }));

          const re = rs.map((v) => ({
            ...v,
            image: {
              ...v.image,
              full: `${this.getDdragonUrl(patch)}/img/spell/${v.image.full}`,
            },
          }));
          this.spellList = re;
        },
      });
  }

  findRuneDataWithId(id: number) {
    const data = this.runeList;
    let result: any;
    data.map((v) => {
      if (v.id === id) {
        result = v;
      }
      v.slots.map((s: { runes: any[] }) => {
        s.runes.map((r) => {
          if (r.id === id) {
            result = r;
          }
        });
      });
    });

    return this.getDdragonRunes(result?.icon);
  }

  loadRuneData(patch?: string) {
    this.http
      .get<any[]>(
        `${environment.dataDragonUrl}/cdn/${
          patch ?? this.patch
        }/data/en_US/runesReforged.json`
      )
      .subscribe({
        next: (res) => {
          this.runeList = res;
        },
      });
  }

  initLoadPatchData() {
    this.http
      .get<string[]>(`${this.ddragonUrl}/api/versions.json`)
      .subscribe((vers) => {
        console.log(vers);
        this.patch = vers[0];

        this.loadSpellData(vers[0]);
        this.loadRuneData(vers[0]);
      });
  }

  getDdragonUrl(patch?: string): string {
    return `${environment.dataDragonUrl}/cdn/${patch ?? this.patch}`;
  }

  getDdragonItemImage(id: string | number) {
    console.log(id);
    if (id === 0) return id;
    const url = this.getDdragonUrl();
    return `${url}/img/item/${id}.png`;
  }

  getDdragonRunes(name?: string): string {
    return `https://ddragon.canisback.com/img/${name}`;
  }

  getSpellInfo(id: number) {
    console.log(this.spellList);
    return this.spellList.find((s) => +s.key === id);
  }

  getChampionAvatar(name: string) {
    const url = this.getDdragonUrl();
    return `${url}/img/champion/${name}.png`;
  }

  getProfileIcon(id: number): string {
    const url = this.getDdragonUrl();
    console.log(url);
    return `${url}/img/profileicon/${id}.png`;
  }

  searchSummoner(query: string): Observable<Summoner> {
    return this.http.get<Summoner>(
      `${environment.riotUrlVN}/lol/summoner/v4/summoners/by-name/${query}?api_key=${environment.riotApiKey}`,
      {
        headers: this.headers,
      }
    );
  }

  getLeagueSummoner(id: string): Observable<LeagueEntry[]> {
    return this.http.get<LeagueEntry[]>(
      `${environment.riotUrlVN}/lol/league/v4/entries/by-summoner/${id}?api_key=${environment.riotApiKey}`
    );
  }
  getInfoSummoner(id: string): Observable<Summoner> {
    return this.http.get<Summoner>(
      `${environment.riotUrlVN}/lol/summoner/v4/summoners/${id}?api_key=${environment.riotApiKey}`
    );
  }

  getRankImagePath(tier: TIER): string {
    let path = '';
    switch (tier) {
      case TIER.BRONZE:
        path = 'emblembrozen';
        break;
      case TIER.CHALLENGER:
        path = 'emblemchallenger';
        break;
      case TIER.DIAMOND:
        path = 'emblemdiamond';
        break;
      case TIER.GOLD:
        path = 'emblemgold';
        break;
      case TIER.GRANDMASTER:
        path = 'emblemgrandmaster';
        break;
      case TIER.IRON:
        path = 'emblemiron';
        break;
      case TIER.MASTER:
        path = 'emblemmaster';
        break;
      case TIER.PLATINUM:
        path = 'emblemplatinum';
        break;
      case TIER.SILVER:
        path = 'emblemsilver';
        break;
      default:
        break;
    }
    return `/assets/rankedemblem/${path}.png`;
  }

  getMatchDataByPuuid(matchId: string): Observable<MatchDTO> {
    return this.http.get<MatchDTO>(
      `${environment.riotUrlSEA}/lol/match/v5/matches/${matchId}?api_key=${environment.riotApiKey}`
    );
  }

  getMatchesByPuuid(puuid: string): MatchDTO[] {
    let result: MatchDTO[] = [];
    this.http
      .get<string[]>(
        `${environment.riotUrlSEA}/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5&api_key=${environment.riotApiKey}`
      )
      .subscribe({
        next: (value) => {
          value.map((id) =>
            this.getMatchDataByPuuid(id).subscribe({
              next: (match) => {
                result.push(match);
              },
            })
          );
        },
      });

    return result;
  }
}
