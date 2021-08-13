export class InscriptionSemaine {
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