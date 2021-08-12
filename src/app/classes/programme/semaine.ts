import { Programme } from "./programme";
import { ModuleProgramme } from "../module-json/module-programme";

export class Semaine implements ModuleProgramme.ISemaine {
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
