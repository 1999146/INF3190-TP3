import { IInscriptionParent, IInscriptionEnfant, IInscriptionSemaine } from "./module-json/module-fiche-parent";
import { InscriptionEnfant } from "./fiche-parent/inscription-enfant";
import { InscriptionSemaine } from "./fiche-parent/inscription-semaine";
import { IGabaritProgramme, ISession, IProgramme } from "./module-json/module-programme";

export class MProgramme {
  static getSessionById(sessions: ISession[], sessionId: string): ISession {
    for (let session of sessions) if (sessionId == session.id) return session;
    return sessions[0];
  }

  static getGabaritProgrammeById(gabaritProgrammes: IGabaritProgramme[], idGabaritProgramme: string): IGabaritProgramme {
    for (let gabarit of gabaritProgrammes) if (idGabaritProgramme == gabarit.id) return gabarit;
    return gabaritProgrammes[0]; // renplacer par undefined
  }

  static getInscriptionSession(inscriptionParent: IInscriptionParent, idSessionActuelle: string): IInscriptionEnfant | undefined {
    for(let inscription of inscriptionParent.inscriptionEnfant) {
      if(inscription.idSession == idSessionActuelle) return inscription;
    }
    return undefined; // remplacer par undefined
  }

  static getInscriptionSemaine(inscriptionParent: IInscriptionParent, idSessionActuelle: string, idSemaine: string, idEnfant: string): IInscriptionSemaine | undefined {
    let inscriptionEnfant: IInscriptionEnfant | undefined = this.getInscriptionSession(inscriptionParent, idSessionActuelle);
    if (inscriptionEnfant != undefined) {
      for(let inscription of inscriptionEnfant.inscriptionsSemaines) {
        if (inscription.idEnfant == idEnfant && inscription.idSemaine == idSemaine) return inscription;
      }
    }
    return undefined; // remplacer par undefined
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
      inscriptionParent: IInscriptionParent, 
      idSemaine: string, 
      idEnfant: string
    ): IGabaritProgramme | undefined {
    let inscriptionSemaine: IInscriptionSemaine | undefined = this.getInscriptionSemaine(
      inscriptionParent, 
      session.id, 
      idSemaine, 
      idEnfant
    );
    if (inscriptionSemaine != undefined) {
      return this.getGabaritProgrammeById(
        gabaritProgrammes, 
        this.getProgrammeById(
          session, 
          idSemaine, 
          inscriptionSemaine.idProgramme
        ).idGabaritProgramme
      );
    }
    return undefined;
  }

  static estInscritNomPaye() {
  
  }
  


}


