import { Semaine } from "./semaine";

export class Session {
  public id: string;
  public nom: string;
  public description: string;
  public dateDebut: Date;
  public dateFin: Date;
  public semaines: Array<Semaine> = new Array<Semaine>();

  public constructor(
      id: string,
      nom: string,
      description: string,
      dateDebut: Date,
      dateFin: Date,
  ) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
  }

  public ajouterSemaine(semaine: Semaine) {
    this.semaines.push(semaine);
  }
  
}
