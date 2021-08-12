import { GabaritProgramme } from "./gabarit-programme";

export class Programme {
  id: string;
  gabaritProgramme: GabaritProgramme;
  animateur: string;
  prix: number;

  constructor(
    id: string,
    gabaritProgramme: GabaritProgramme,
    animateur: string,
    prix: number,
  ) {
    this.id = id;
    this.gabaritProgramme = gabaritProgramme;
    this.animateur = animateur;
    this.prix = prix;
  }
  
}
