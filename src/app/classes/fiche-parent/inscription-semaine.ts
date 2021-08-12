export class InscriptionSemaine {
  idProgramme: string;
  idSemaine: string;
  estPaye: boolean;

  constructor(  
      idProgramme: string,
      idSemaine: string, 
      estPaye: boolean
    ) {
    this.idProgramme = idProgramme;
    this.idSemaine = idSemaine;
    this.estPaye = estPaye;
  }
  
}