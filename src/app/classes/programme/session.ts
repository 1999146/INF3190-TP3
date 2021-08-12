import { ModuleProgramme } from "../module-json/module-programme";
import { Semaine } from "./semaine";

export class Session implements ModuleProgramme.ISession {
  public id: string;
  public nom: string;
  public description: string;
  public dateDebut: string;
  public dateFin: string;
  public semaines: Array<Semaine> = new Array<Semaine>();

  public constructor(
      id: string,
      nom: string,
      description: string,
      dateDebut: string,
      dateFin: string
  ) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
  }
  
}
