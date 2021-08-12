import { Enfant } from "./enfant";
import { FicheParent } from "./module-json/fiche-parent";

export class Parent implements FicheParent.IParent{
  public id: string;
  public nom: string;
  public prenom: string;
  public courriel: string;
  public adresse: string;
  public dateNaissance: string;
  public urlPhoto: string;
  public enfants: Enfant[] = new Array<Enfant>();

  public constructor(
      id: string, 
      nom: string, 
      prenom: string, 
      courriel: string, 
      adresse: string, 
      dateNaissance: string, 
      urlPhoto: string, 
    ) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.courriel = courriel;
    this.adresse = adresse;
    this.dateNaissance = dateNaissance;
    this.urlPhoto = urlPhoto;
  }
  
}
