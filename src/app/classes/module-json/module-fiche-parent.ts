
  export interface IFicheParent {
    username: string;
    password: string;
    parent: IParent;
  }

  export interface IParent {
    id: string;
    nom: string;
    prenom: string;
    courriel: string;
    adresse: string;
    dateNaissance: string;
    urlPhoto: string;
    enfants: IEnfant[];
  }

  export interface IEnfant {
    id: string;
    nom: string;
    prenom: string;
    dateNaissance: string;
    urlPhoto: string;
    note: string;
  }


  // Inscription

  export interface IInscriptionParent {
    idParent: string;
    inscriptionEnfant: IInscriptionEnfant[];
  }

  export interface IInscriptionEnfant {
    idSession: string;
    inscriptionsSemaines: IInscriptionSemaine[];
  }

  export interface IInscriptionSemaine {
    idEnfant: string;
    idProgramme: string;
    idSemaine: string;
    estPaye: boolean;
  }



