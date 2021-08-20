export class Random {

  static randomID(): string {
    let noSerie: string = '';

    noSerie = noSerie.concat(this.random(10000).toString());
    noSerie = noSerie.concat(this.random(10000).toString());
    noSerie = noSerie.concat(this.random(10000).toString());
    noSerie = noSerie.concat(this.random(10000).toString());

    return noSerie;
  }

  static random(modulo: number): number {
    return Math.floor((Math.random() * 100000000) % modulo);
  }

}