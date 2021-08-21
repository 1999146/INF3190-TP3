import { Random } from "../random";
import { IActivite, IBlocActivite, ITypeActivite, IHoraire, ISemaine, ISession, IProgramme, IGabaritProgramme } from "./interface-json/interface-session";

// Session

export class Session implements ISession {
  public id: string;
  public nom: string;
  public description: string;
  public dateDebut: string;
  public dateFin: string;
  public semaines: Array<Semaine> = new Array<Semaine>();

  public constructor(
      nom: string,
      description: string,
      dateDebut: string,
      dateFin: string
  ) {
    this.id = "session" + Random.randomID();
    this.nom = nom;
    this.description = description;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.semaines = [];
    for (let i = 1; i <= 15; i++) {
      this.semaines.push(new Semaine(i));
    }
  }
  
}

export class Semaine implements ISemaine {
  public id: string;
  public noSemaine: number;
  public idProgrammes: Array<string> = new Array<string>();

  constructor(
      noSemaine: number
  ) {
    this.id = "semaine" + Random.randomID();
    this.noSemaine = noSemaine;
    this.idProgrammes = [];
  };

}

export class Programme implements IProgramme {
  public id: string;
  public idGabaritProgramme: string;
  public animateur: string;
  public prix: number;

  constructor(
    gabaritProgramme: string,
    animateur: string,
    prix: number,
  ) {
    this.id = "programme" + Random.randomID();
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
      titre: string,
      description: string
  ) {
    this.id = "gabarit" + Random.randomID();
    this.titre = titre;
    this.description = description;
  }
  
}


// Activite

export class HorairePrograme {
  public idProgramme: string;
  public horraires: IHoraire[];

  constructor (
      idProgramme: string,
      horraires: IHoraire[]
  ) {
    this.idProgramme = idProgramme;
    this.horraires = horraires;
  }

}

export class Horaire implements IHoraire {
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
      nom: string, 
      idTypeActivite: string
    ) {
    this.id = "activite" + Random.randomID();
    this.nom = nom;
    this.idTypeActivite = idTypeActivite;
  }

}

export class BlocActivite implements IBlocActivite {
  public id: string;
  public nom: string;
  public idActivites: Array<string>;
  public idTypeActivites: Array<string>;

  public constructor(
      nom: string, 
      idActivites: Array<string>, 
      idTypeActivites: Array<string>
    ) {
    this.id = "bloc" + Random.randomID();
    this.nom = nom;
    this.idActivites = idActivites;
    this.idTypeActivites = idTypeActivites;
  }

}

export class TypeActivite implements ITypeActivite {
  public id: string;
  public nom: string;
  public description: string;

  public constructor(
      nom: string, 
      description: string
  ) {
    this.id = "type" + Random.randomID();
    this.nom = nom;
    this.description = description;
  }
  
}
