import { IEnfant } from "../interface-json/interface-parent";
import { IInscriptionEnfant } from "../interface-json/interface-parent";

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