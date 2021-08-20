import { IActivite, IBlocActivite, ITypeActivite, IHorraire, ISemaine, ISession, IProgramme, IGabaritProgramme } from "./interface-json/interface-session";

// Session

export class Session implements ISession {
  public id: string;
  public nom: string;
  public description: string;
  public dateDebut: string;
  public dateFin: string;
  public semaines: Array<Semaine> = new Array<Semaine>();

  public constructor(
      id: string,
      nom: string,
      description: string,
      dateDebut: string,
      dateFin: string
  ) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
  }
  
}

export class Semaine implements ISemaine {
  public id: string;
  public noSemaine: number;
  public programmes: Array<Programme> = new Array<Programme>();

  constructor(
      id: string,
      noSemaine: number
  ) {
    this.id = id;
    this.noSemaine = noSemaine;
  };

}

export class Programme implements IProgramme {
  public id: string;
  public idGabaritProgramme: string;
  public animateur: string;
  public prix: number;

  constructor(
    id: string,
    gabaritProgramme: string,
    animateur: string,
    prix: number,
  ) {
    this.id = id;
    this.idGabaritProgramme = gabaritProgramme;
    this.animateur = animateur;
    this.prix = prix;
  }
  
}

export class GabaritProgramme implements IGabaritProgramme {
  public id: string;
  public titre: string;
  public description: string;

  constructor(
      id: string,
      titre: string,
      description: string
  ) {
    this.id = id;
    this.titre = titre;
    this.description = description;
  }
  
}


// Activite

export class HorrairePrograme {
  idProgramme: string;
  horraires: IHorraire[];

  constructor (
      idProgramme: string,
      horraires: IHorraire[]
  ) {
    this.idProgramme = idProgramme;
    this.horraires = horraires;
  }

}

export class Horraire implements IHorraire {
  public idActivitesProg: string;
  public plageHoraire: number;
  public duree: number;

  public constructor (
      idActivitesProg: string,
      plageHoraire: number,
      duree: number
  ) {
    this.idActivitesProg = idActivitesProg;
    this.plageHoraire = plageHoraire;
    this.duree = duree;
  }
  
}

export class Activite implements IActivite {
  public id: string;
  public nom: string;
  public idTypeActivite: string;

  public constructor(
      id: string, 
      nom: string, 
      idTypeActivite: string
    ) {
    this.id = id;
    this.nom = nom;
    this.idTypeActivite = idTypeActivite;
  }

}

export class BlocActivite implements IBlocActivite {
  public id: string;
  public nom: string;
  public activites: Array<Activite>;
  public idTypeActivites: Array<string>;

  public constructor(
      id: string, 
      nom: string, 
      activites: Array<Activite>, 
      idTypeActivites: Array<string>
    ) {
    this.id = id;
    this.nom = nom;
    this.activites = activites;
    this.idTypeActivites = idTypeActivites;
  }

}

export class TypeActivite implements ITypeActivite {
  public id: string;
  public nom: string;
  public description: string;

  public constructor(
      id: string,
      nom: string, 
      description: string
  ) {
    this.id = id;
    this.nom = nom;
    this.description = description;
  }
  
}
