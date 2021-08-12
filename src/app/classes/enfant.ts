import { ModuleFicheParent } from "./module-json/module-fiche-parent";

export class Enfant implements ModuleFicheParent.IEnfant {
  public id: string;
  public nom: string;
  public prenom: string;
  public dateNaissance: string;
  public urlPhoto: string;
  public note: string;

  public constructor(
      id: string,
      nom: string,
      prenom: string,
      dateNaissance: string,
      urlPhoto: string,
      note: string
  ) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.urlPhoto = urlPhoto;
    this.note = note;
  }
}