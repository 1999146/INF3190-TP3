import { Enfant } from "./enfant";
import { IParent } from "../module-json/module-fiche-parent";

export class Parent implements IParent{
  public id: string;
  public username: string;
  public password: string;
  public nom: string;
  public prenom: string;
  public courriel: string;
  public adresse: string;
  public dateNaissance: string;
  public urlPhoto: string;
  public enfants: Enfant[] = new Array<Enfant>();

  public constructor(
      id: string,
      username: string,
      password: string,
      nom: string, 
      prenom: string, 
      courriel: string, 
      adresse: string, 
      dateNaissance: string, 
      urlPhoto: string, 
    ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.nom = nom;
    this.prenom = prenom;
    this.courriel = courriel;
    this.adresse = adresse;
    this.dateNaissance = dateNaissance;
    this.urlPhoto = urlPhoto;
  }
  
}
