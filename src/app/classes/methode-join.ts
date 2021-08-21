import { Inscription } from "./parent";
import { IInscriptionParent, IInscriptionEnfant, IEnfant, IParent } from "./interface-json/interface-parent";
import { IGabaritProgramme, ISession, IProgramme, ISemaine, IActivite, ITypeActivite } from "./interface-json/interface-session";
import inscriptionParent from "src/data/inscription-parent";

export class Join <T> {
  static getSessionById(sessions: ISession[], sessionId: string): ISession | undefined {
    for (let session of sessions) if (sessionId == session.id) return session;
    return undefined; // remplacer undefined
  }

  static getGabaritProgrammeById(gabaritProgrammes: IGabaritProgramme[], idGabaritProgramme: string): IGabaritProgramme | undefined {
    for (let gabarit of gabaritProgrammes) if (idGabaritProgramme == gabarit.id) return gabarit;
    return undefined;
  }

  static getInscriptionsEnfants(inscriptionsParents: IInscriptionParent[], idSessionActuelle: string): IInscriptionEnfant[] | undefined {
    for (let inscriptionParent of inscriptionsParents) {
      if (inscriptionParent.idSession == idSessionActuelle) return inscriptionParent.inscriptionsEnfants;
    }
    return undefined;
  }

  static getInscriptionEnfant(inscriptionsParents: IInscriptionParent[], idSessionActuelle: string, idSemaine: string, idEnfant: string): IInscriptionEnfant | undefined {
    let inscriptionsEnfants: IInscriptionEnfant[] | undefined = this.getInscriptionsEnfants(inscriptionsParents, idSessionActuelle);
    if (inscriptionsEnfants != undefined) {
      for(let inscriptionEnfant of inscriptionsEnfants) {
        if (inscriptionEnfant.idEnfant == idEnfant && inscriptionEnfant.idSemaine == idSemaine) return inscriptionEnfant;
      }
    }
    return undefined;
  }

  // static getProgrammeById(session: ISession, idSemaine: string, idProgramme: string): IProgramme | undefined {
  //   for (let semaine of session.semaines) {
  //     if (semaine.id == idSemaine) {
  //       for (let programme of semaine.programmes) {
  //         if (idProgramme == programme.id) return programme;
  //       }
  //     }
  //   }
  //   return undefined;
  // }

  static getProgrammeById(programmes: IProgramme[], idProgramme: string): IProgramme | undefined {
    for (let programme of programmes) {
      if (programme.id == idProgramme) return programme;
    }
    return undefined;
  }

  static getProgrammeInscrit(session: ISession, inscriptionsParents: IInscriptionParent[], programmes: IProgramme[], idSemaine: string, idEnfant: string): IProgramme | undefined {
    let inscriptionEnfant: IInscriptionEnfant | undefined = Join.getInscriptionEnfant(inscriptionsParents, session.id, idSemaine, idEnfant);
    if (inscriptionEnfant != undefined) {
      return Join.getProgrammeById(programmes, inscriptionEnfant.idProgramme);
    }
    return undefined;
  }

  static getGabaritProgramme(
      session: ISession, 
      gabaritProgrammes: IGabaritProgramme[], 
      inscriptionsParents: IInscriptionParent[], 
      programmes: IProgramme[],
      idSemaine: string, 
      idEnfant: string
    ): IGabaritProgramme | undefined {

    let inscriptionEnfant: IInscriptionEnfant | undefined = this.getInscriptionEnfant(
      inscriptionsParents, 
      session.id, 
      idSemaine, 
      idEnfant
    );
    if (inscriptionEnfant != undefined) {
      let programme: IProgramme | undefined = this.getProgrammeById(
        programmes,
        inscriptionEnfant.idProgramme
      );
      if (programme != undefined) {
        return this.getGabaritProgrammeById(
          gabaritProgrammes, 
          programme.idGabaritProgramme
        );
      }
    }
    return undefined;

  }

  static getInscriptionsParents(inscriptionsParents: IInscriptionParent[], idParent: string): IInscriptionParent[] {
    let inscriptionsParentAuth: IInscriptionParent[] = new Array<IInscriptionParent>();
    for (let inscriptionParent of inscriptionsParents) {
      if (inscriptionParent.idParent == idParent) inscriptionsParentAuth.push(inscriptionParent);
    }
    return inscriptionsParentAuth;
  }

  static getInscriptionParentActuelle(inscriptionsParents: IInscriptionParent[], idSession: string): IInscriptionParent | undefined {
    for (let inscriptionParent of inscriptionsParents) {
      if(inscriptionParent.idSession == idSession) return inscriptionParent;
    }
    return undefined;
  }

  //pour admin
  static getInscriptions(inscriptionsParents: IInscriptionParent[]): Inscription[] {
    let inscriptions: Inscription[] = new Array<Inscription>();
    for (let inscriptionParent of inscriptionsParents) {
      for (let inscriptionEnfant of inscriptionParent.inscriptionsEnfants) {
        inscriptions.push(new Inscription (
          inscriptionEnfant.idEnfant, 
          inscriptionEnfant.idProgramme, 
          inscriptionEnfant.idSemaine, 
          inscriptionEnfant.estPaye, 
          inscriptionParent.idParent, 
          inscriptionParent.idSession
        ));
      }
    }
    return inscriptions;
  }

  static estInscriptionPaye(inscriptionsParents: IInscriptionParent[], idSession: string, idSemaine: string, idEnfant: string): boolean {
    let inscriptionEnfant: IInscriptionEnfant | undefined = Join.getInscriptionEnfant(
      inscriptionsParents, 
      idSession, 
      idSemaine, 
      idEnfant
    );
    if (inscriptionEnfant == undefined) return false;
    else return inscriptionEnfant.estPaye;
  }

  static estInscriptionInscrit(inscriptionsParents: IInscriptionParent[], idSession: string, idSemaine: string, idEnfant: string): boolean {
    let inscriptionEnfant: IInscriptionEnfant | undefined = Join.getInscriptionEnfant(
      inscriptionsParents, 
      idSession, 
      idSemaine, 
      idEnfant
    );
    if (inscriptionEnfant == undefined) return false;
    else return inscriptionEnfant.estInscrit;
  }

  static getIdGabaritProgrammeInscrit(inscriptionsParents: IInscriptionParent[], idSession: string, idSemaine: string, idEnfant: string): boolean {
    let inscriptionEnfant: IInscriptionEnfant | undefined = Join.getInscriptionEnfant(
      inscriptionsParents, 
      idSession, 
      idSemaine, 
      idEnfant
    );
    if (inscriptionEnfant == undefined) return false;
    else return inscriptionEnfant.estInscrit;
  }

  static getSemaineById(session: ISession, idSemaine: string): ISemaine | undefined {
    for (let semaine of session.semaines) {
      if (semaine.id == idSemaine) return semaine;
    }
    return undefined;
  }

  static getEnfantById(parent: IParent, idEnfant: string): IEnfant | undefined {
    for (let enfant of parent.enfants) {
      if (enfant.id == idEnfant) return enfant;
    }
    return undefined;
  }

  static getActivitesByType(activites: IActivite[], idType: string): IActivite[] {
    let activitesDuType: IActivite[] = [];
    for (let activite of activites) {
      if(activite.idTypeActivite == idType) activitesDuType.push(activite);
    }
    return activitesDuType;
  }

  static getActiviteById(activites: IActivite[], idActivite: string): IActivite | undefined {
    for (let activite of activites) {
      if (activite.id == idActivite) return activite;
    }
    return undefined;
  }

  static getTypeActiviteById(typeActivites: ITypeActivite[], idTypeActivite: string): ITypeActivite | undefined {
    for (let typeActivite of typeActivites) {
      if (typeActivite.id == idTypeActivite) return typeActivite;
    }
    return undefined;
  }

  

  


}


