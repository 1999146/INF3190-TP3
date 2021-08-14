import { Programme } from "./programme";
import { ISemaine } from "../interface-json/interface-programme";

export class Semaine implements ISemaine {
  public id: string;
  public noSemaine: number;
  public programmes: Array<Programme> = new Array<Programme>();

  constructor(
      id: string,
      noSemaine: number
  ) {
    this.id = id;
    this.noSemaine = noSemaine;
  };

  public ajouterProgramme(programme: Programme) {
    this.programmes.push(programme);
  }
  
}
