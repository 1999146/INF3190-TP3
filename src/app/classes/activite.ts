import { TypeActivite } from "./type-activite";

export class Activite {
  public id: string;
  public nom: string;
  public typeActivite: TypeActivite;

  public constructor(
      id: string, 
      nom: string, 
      typeActivite: TypeActivite
    ) {
    this.id = id;
    this.nom = nom;
    this.typeActivite = typeActivite;
  }
}
