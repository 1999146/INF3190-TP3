import { Component, Input, OnInit } from '@angular/core';
import { IGabaritProgramme, IHoraire, IHorairePrograme, IProgramme, ISemaine, ISession, IActivite, IBlocActivite, ITypeActivite } from 'src/app/classes/interface-json/interface-session';
import { Join } from 'src/app/classes/methode-join';
import { Programme, Session } from 'src/app/classes/session';

@Component({
  selector: 'app-modal-creer-programme',
  templateUrl: './modal-creer-programme.component.html',
  styleUrls: ['./modal-creer-programme.component.scss']
})
export class ModalCreerProgrammeComponent implements OnInit {

  @Input() sessions!: ISession[];
  @Input() programmes!: IProgramme[];
  @Input() horairesProgrammes!: IHorairePrograme[];
  @Input() gabaritProgrammes!: IGabaritProgramme[];

  @Input() activites!: IActivite[];
  @Input() typeActivites!: ITypeActivite[];
  @Input() blocActivites!: IBlocActivite[];

  newProgramme!: IProgramme;
  newSession!: ISession;
  idSession!: string;

  constructor() { }

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    if (this.newProgramme == undefined) this.newProgramme = new Programme(this.gabaritProgrammes[0].id, "", 0);
    this.newSession = new Session("", "", "", "");
  }

  enregistrerProgramme() {
    console.log(JSON.stringify(this.newSession));
    console.log(JSON.stringify(this.newProgramme));
    console.log(JSON.stringify(this.idSession));

    let programme = new Programme(
      this.newProgramme.idGabaritProgramme, 
      this.newProgramme.animateur, 
      this.newProgramme.prix
    )

    this.programmes.unshift(programme);

    let session = Join.getSessionById(this.sessions, this.idSession);
    if (session != undefined) {
      for (let i = 0; i < 15; i++) {
        if (this.newSession.semaines[i].idProgrammes.length != 0) {
          session.semaines[i].idProgrammes.push(programme.id);
        }
      }
    }

  }

  ajouterProgramme(noSemaine: number) {
    if (this.contientIdProgramme(noSemaine)) this.supprimerIdType(noSemaine);
    else this.newSession.semaines[noSemaine-1].idProgrammes.push(this.newProgramme.id);
  }

  contientIdProgramme(noSemaine: number) {
    for (let idProgramme of this.newSession.semaines[noSemaine-1].idProgrammes) {
      if (idProgramme == this.newProgramme.id) return true;
    }
    return false;
  }

  supprimerIdType(noSemaine: number) {
    let index = this.getIndexOfProgramme(noSemaine);
    this.newSession.semaines[noSemaine-1].idProgrammes.splice(index, 1);
  }

  getIndexOfProgramme(noSemaine: number): number {
    let i = 0;
    for (let idProgramme of this.newSession.semaines[noSemaine-1].idProgrammes) {
      if (idProgramme != this.newProgramme.id) ++i;
      else return i;
    }
    return -1;
  }






}
