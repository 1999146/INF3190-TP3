import { IInscriptionParent, IInscriptionEnfant } from "./interface-json/interface-parent";
import { IGabaritProgramme, ISession, IProgramme } from "./interface-json/interface-programme";

export class Join {
  static getSessionById(sessions: ISession[], sessionId: string): ISession {
    for (let session of sessions) if (sessionId == session.id) return session;
    return sessions[0]; // remplacer undefined
  }

  static getGabaritProgrammeById(gabaritProgrammes: IGabaritProgramme[], idGabaritProgramme: string): IGabaritProgramme {
    for (let gabarit of gabaritProgrammes) if (idGabaritProgramme == gabarit.id) return gabarit;
    return gabaritProgrammes[0]; // renplacer par undefined
  }

  static getInscriptionsEnfants(inscriptionParents: IInscriptionParent[], idSessionActuelle: string): IInscriptionEnfant[] | undefined {
    for (let inscriptionParent of inscriptionParents) {
      if (inscriptionParent.idSession == idSessionActuelle) return inscriptionParent.inscriptionsEnfants;
    }
    return undefined;
  }

  static getInscriptionEnfant(inscriptionParent: IInscriptionParent[], idSessionActuelle: string, idSemaine: string, idEnfant: string): IInscriptionEnfant | undefined {
    let inscriptionsEnfants: IInscriptionEnfant[] | undefined = this.getInscriptionsEnfants(inscriptionParent, idSessionActuelle);
    if (inscriptionsEnfants != undefined) {
      for(let inscriptionEnfant of inscriptionsEnfants) {
        if (inscriptionEnfant.idEnfant == idEnfant && inscriptionEnfant.idSemaine == idSemaine) return inscriptionEnfant;
      }
    }
    return undefined;
  }

  static getProgrammeById(session: ISession, idSemaine: string, idProgramme: string): IProgramme {
    for (let semaine of session.semaines) {
      if (semaine.id == idSemaine) {
        for (let programme of semaine.programmes) {
          if (idProgramme == programme.id) return programme;
        }
      }
    }
    return session.semaines[0].programmes[0]; // return undefined
  }

  static getGabaritProgramme(
      session: ISession, 
      gabaritProgrammes: IGabaritProgramme[], 
      inscriptionParent: IInscriptionParent[], 
      idSemaine: string, 
      idEnfant: string
    ): IGabaritProgramme | undefined {
    let inscriptionEnfant: IInscriptionEnfant | undefined = this.getInscriptionEnfant(
      inscriptionParent, 
      session.id, 
      idSemaine, 
      idEnfant
    );
    if (inscriptionEnfant != undefined) {
      return this.getGabaritProgrammeById(
        gabaritProgrammes, 
        this.getProgrammeById(
          session, 
          idSemaine, 
          inscriptionEnfant.idProgramme
        ).idGabaritProgramme
      );
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

  static estInscritNomPaye() {
  
  }
  


}


