import { Activite } from "./activite";
import { TypeActivite } from "./type-activite";

export class BlocActivite {
  public id: string;
  public nom: string;
  public activites: Array<Activite>;
  public typeBloc: Array<TypeActivite>;

  public constructor(
      id: string, 
      nom: string, 
      activites: Array<Activite>, 
      typeBloc: Array<TypeActivite>
    ) {
    this.id = id;
    this.nom = nom;
    this.activites = activites;
    this.typeBloc = typeBloc;
  }
}
