import { ModuleProgramme } from "../module-json/module-programme";

export class Activite implements ModuleProgramme.IActivite {
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
