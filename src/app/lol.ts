export interface Summoner {
  accountId: string;
  profileIconId: number;
  revisionDate: number;
  name: string;
  id: string;
  puuid: string;
  summonerLevel: number;
  avatar?: string;
}

export interface LeagueEntry {
  leagueId: string;
  queueType: QUEUE;
  tier: TIER;
  rank: string;
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
  tierImage?: string;
}

export interface MatchDTO {
  metadata: MetadataDto;
  info: MatchInfoDTO;
}

export interface MatchInfoDTO {
  gameCreation: number;
  gameDuration: number;
  gameId: number;
  gameMode: string;
  gameName: string;
  gameStartTimestamp: number;
  gameType: string;
  gameVersion: string;
  mapId: number;
  participants: ParticipantDTO[];
  platformId: string;
  queueId: number;
  teams: TeamDTO[];
  tournamentCode: string;
}
export interface TeamDTO {
  bans: BanDTO[];
  objectives: ObjectivesDTO;
  teamId: number;
  win: boolean;
}
export interface ObjectivesDTO {
  baron: ObjectivesStatsDTO;
  champion: ObjectivesStatsDTO;
  dragon: ObjectivesStatsDTO;
  inhibitor: ObjectivesStatsDTO;
  riftHerald: ObjectivesStatsDTO;
  tower: ObjectivesStatsDTO;
}
export interface ObjectivesStatsDTO {
  first: boolean;
  kills: number;
}
export interface BanDTO {
  championId: number;
  pickTurn: number;
}

export interface ParticipantDTO {
  assists: number;
  baronKills: number;
  bountyLevel: number;
  champExperience: number;
  champLevel: number;
  championId: number;
  championName: string;
  championTransform: number;
  consumablesPurchased: number;
  damageDealtToBuildings: number;
  damageDealtToObjectives: number;
  damageDealtToTurrets: number;
  damageSelfMitigated: number;
  deaths: number;
  detectorWardsPlaced: number;
  doubleKills: number;
  dragonKills: number;
  firstBloodAssist: boolean;
  firstBloodKill: boolean;
  firstTowerAssist: boolean;
  firstTowerKill: boolean;
  gameEndedInEarlySurrender: boolean;
  gameEndedInSurrender: boolean;
  goldEarned: number;
  goldSpent: number;
  individualPosition: string;
  inhibitorKills: number;
  inhibitorTakedowns: number;
  inhibitorsLost: number;
  item0: string | number;
  item1: string | number;
  item2: string | number;
  item3: string | number;
  item4: string | number;
  item5: string | number;
  item6: string | number;
  itemsPurchased: number;
  killingSprees: number;
  kills: number;
  lane: string;
  largestCriticalStrike: number;
  largestKillingSpree: number;
  largestMultiKill: number;
  longestTimeSpentLiving: number;
  magicDamageDealt: number;
  magicDamageDealtToChampions: number;
  magicDamageTaken: number;
  neutralMinionsKilled: number;
  nexusKills: number;
  nexusLost: number;
  nexusTakedowns: number;
  objectivesStolen: number;
  objectivesStolenAssists: number;
  participantId: number;
  pentaKills: number;
  perks: PerksDTO;
  physicalDamageDealt: number;
  physicalDamageDealtToChampions: number;
  physicalDamageTaken: number;
  profileIcon: number;
  puuid: string;
  quadraKills: number;
  riotIdName: string;
  riotIdTagline: string;
  role: string;
  sightWardsBoughtInGame: number;
  spell1Casts: number;
  spell2Casts: number;
  spell3Casts: number;
  spell4Casts: number;
  summoner1Casts: number;
  summoner1Id: number;
  summoner2Casts: number;
  summoner2Id: number;
  summonerId: string;
  summonerLevel: number;
  summonerName: string;
  teamEarlySurrendered: boolean;
  teamId: number;
  teamPosition: string;
  timeCCingOthers: number;
  timePlayed: number;
  totalDamageDealt: number;
  totalDamageDealtToChampions: number;
  totalDamageShieldedOnTeammates: number;
  totalDamageTaken: number;
  totalHeal: number;
  totalHealsOnTeammates: number;
  totalMinionsKilled: number;
  totalTimeCCDealt: number;
  totalTimeSpentDead: number;
  totalUnitsHealed: number;
  tripleKills: number;
  trueDamageDealt: number;
  trueDamageDealtToChampions: number;
  trueDamageTaken: number;
  turretKills: number;
  turretTakedowns: number;
  turretsLost: number;
  unrealKills: number;
  visionScore: number;
  visionWardsBoughtInGame: number;
  wardsKilled: number;
  wardsPlaced: number;
  win: boolean;
}

export interface PerksDTO {
  statPerks: StatPerksDTO;
  styles: StyleDTO[];
}
export interface StatPerksDTO {
  defense: number;
  flex: number;
  offense: number;
}
export interface StyleDTO {
  description: string;
  selections: SelectionDTO[];
  style: number;
}
export interface SelectionDTO {
  perk: number;
  var1: number;
  var2: number;
  var3: number;
}

export interface ParticipantClient extends ParticipantDTO {
  championAvatar?: string;
  spell1Icon?: string;
  spell2Icon?: string;
  rune1?: string;
  rune2?: string;
}

export interface MetadataDto {
  dataVersion: string;
  matchId: string;
  participants: string[];
}

export enum QUEUE {
  RANKED_SOLO_5x5 = 'RANKED_SOLO_5x5',
  RANKED_TFT = 'RANKED_TFT',
  RANKED_FLEX_SR = 'RANKED_FLEX_SR',
  RANKED_FLEX_TT = 'RANKED_FLEX_TT',
}

export enum TIER {
  CHALLENGER = 'CHALLENGER',
  GRANDMASTER = 'GRANDMASTER',
  MASTER = 'MASTER',
  DIAMOND = 'DIAMOND',
  PLATINUM = 'PLATINUM',
  GOLD = 'GOLD',
  SILVER = 'SILVER',
  BRONZE = 'BRONZE',
  IRON = 'IRON',
}
export enum DIVISION {
  I = 'I',
  II = 'II',
  III = 'III',
  IV = 'IV',
}
