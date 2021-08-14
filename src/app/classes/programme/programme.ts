import { IProgramme } from "../interface-json/interface-programme";

export class Programme implements IProgramme {
  public id: string;
  public idGabaritProgramme: string;
  public animateur: string;
  public prix: number;

  constructor(
    id: string,
    gabaritProgramme: string,
    animateur: string,
    prix: number,
  ) {
    this.id = id;
    this.idGabaritProgramme = gabaritProgramme;
    this.animateur = animateur;
    this.prix = prix;
  }
  
}
