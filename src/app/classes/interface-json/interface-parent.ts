
  export interface IParent {
    id: string;
    username: string;
    password: string;
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
    idSession: string;
    inscriptionsEnfants: IInscriptionEnfant[];
  }

  export interface IInscriptionEnfant {
    idEnfant: string;
    idProgramme: string;
    idSemaine: string;
    estPaye: boolean;
  }



