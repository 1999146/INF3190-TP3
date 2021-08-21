  export interface ISession {
    id: string;
    nom: string;
    description: string;
    dateDebut: string;
    dateFin: string;
    semaines: ISemaine[];
  }

  export interface ISemaine {
    id: string;
    noSemaine: number;
    programmes: IProgramme[];
  }

  export interface IProgramme {
    id: string;
    idGabaritProgramme: string;
    animateur: string;
    prix: number;
  }  
  
  export interface IGabaritProgramme {
    id: string;
    titre: string;
    description: string;
  }


  // Activite

  export interface IHorrairePrograme {
    idProgramme: string;
    horraires: IHorraire[];
  }

  export interface IHorraire {
    idActivitesProg: string;
    plageHoraire: number;
    duree: number;
  }

  export interface IActivite {
    id: string;
    nom: string;
    idTypeActivite: string;
  }

  export interface IBlocActivite {
    id: string;
    nom: string;
    idActivites: string[];
    idTypeActivites: string[];
  }

  export interface ITypeActivite {
    id: string;
    nom: string;
    description: string;
  }

