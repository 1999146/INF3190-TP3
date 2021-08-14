import { IEnfant, IParent, IInscriptionEnfant, IInscriptionParent } from "./interface-json/interface-parent";

// Parent

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

export class Enfant implements IEnfant {
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

// Inscription

export class InscriptionParent implements IInscriptionParent {
  idParent: string;
  idSession: string;
  inscriptionsEnfants: InscriptionEnfant[] = new Array<InscriptionEnfant>();

  constructor(
      idParent: string,
      idSession: string
  ) {
    this.idParent = idParent;
    this.idSession = idSession;
  }

}

export class InscriptionEnfant implements IInscriptionEnfant {
  idEnfant: string;
  idProgramme: string;
  idSemaine: string;
  estPaye: boolean;

  constructor(
      idEnfant: string,
      idProgramme: string,
      idSemaine: string
    ) {
    this.idEnfant = idEnfant;
    this.idProgramme = idProgramme;
    this.idSemaine = idSemaine;
    this.estPaye = false;
  }
  
}

// pour admin
export class Inscription {
  idEnfant: string;
  idProgramme: string;
  idSemaine: string;
  estPaye: boolean;

  idParent: string;
  idSession: string;

  constructor(
      idEnfant: string,
      idProgramme: string,
      idSemaine: string,
      estPaye: boolean,
      idParent: string,
      idSession: string
    ) {
    this.idEnfant = idEnfant;
    this.idProgramme = idProgramme;
    this.idSemaine = idSemaine;
    this.estPaye = estPaye;
    this.idParent = idParent;
    this.idSession = idSession;
  }
  
}