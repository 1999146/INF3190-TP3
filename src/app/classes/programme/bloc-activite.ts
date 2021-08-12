import { Activite } from "./activite";
import { ModuleProgramme } from "../module-json/module-programme";

export class BlocActivite implements ModuleProgramme.IBlocActivite {
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
