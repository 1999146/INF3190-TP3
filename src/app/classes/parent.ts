import { Enfant } from "./enfant";

export class Parent {
  public id: string;
  public nom: string;
  public prenom: string;
  public courriel: string;
  public adresse: string;
  public dateNaissance: Date;
  public urlPhoto: string;
  public enfants: Array<Enfant> = new Array<Enfant>();

  public constructor(
      id: string, 
      nom: string, 
      prenom: string, 
      courriel: string, 
      adresse: string, 
      dateNaissance: Date, 
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

  public ajouterEnfant(enfant: Enfant) {
    this.enfants.push(enfant);
  }
  
}
