import { IActivite } from "../interface-json/interface-programme";

export class Activite implements IActivite {
  public id: string;
  public nom: string;
  public idTypeActivite: string;

  public constructor(
      id: string, 
      nom: string, 
      idTypeActivite: string
    ) {
    this.id = id;
    this.nom = nom;
    this.idTypeActivite = idTypeActivite;
  }
}
