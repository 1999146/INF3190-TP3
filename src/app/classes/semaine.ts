import { Session } from "./session";
import { Programme } from "./programme";

export class Semaine {
  public id: string;
  public session: Session;
  public noSemaine: number;
  public programmes: Array<Programme> = new Array<Programme>();

  constructor(
      id: string,
      session: Session,
      noSemaine: number
  ) {
    this.id = id;
    this.session = session;
    this.noSemaine = noSemaine;
  };

  public ajouterProgramme(programme: Programme) {
    this.programmes.push(programme);
  }
  
}
