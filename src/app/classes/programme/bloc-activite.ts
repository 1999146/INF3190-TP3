import { Activite } from "./activite";
import { IBlocActivite } from "../interface-json/interface-programme";

export class BlocActivite implements IBlocActivite {
  public id: string;
  public nom: string;
  public activites: Array<Activite>;
  public idTypeActivites: Array<string>;

  public constructor(
      id: string, 
      nom: string, 
      activites: Array<Activite>, 
      idTypeActivites: Array<string>
    ) {
    this.id = id;
    this.nom = nom;
    this.activites = activites;
    this.idTypeActivites = idTypeActivites;
  }
}
