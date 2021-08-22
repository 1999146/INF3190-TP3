import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Session } from 'src/app/classes/session'
import { ISession } from 'src/app/classes/interface-json/interface-session';
import {MessageService} from "../../../services/message.service";

@Component({
  selector: 'app-modal-creer-session',
  templateUrl: './modal-creer-session.component.html',
  styleUrls: ['./modal-creer-session.component.scss']
})
export class ModalCreerSessionComponent implements OnInit {

  @Input() sessions!: ISession[] | undefined;

  constructor(private MessageService:MessageService) { }

  ngOnInit(): void {
  }

  ajouterSession(f: NgForm): void {
    let session = f.value as ISession;
    if (this.sessions == undefined) this.sessions = [];
    if (this.valeurRemplies(session)) {
      let newSession = new Session(
        session.nom,
        session.description,
        session.dateDebut,
        session.dateFin
      );
      this.sessions.unshift(newSession);
    }
    this.MessageService.setMsgGlobal("Session ajoutée avec succès!");
  }

  valeurRemplies(session: any): boolean {
    return (
      session.nom != "" &&
      session.description != "" &&
      session.dateDebut != "" &&
      session.dateFin != "" &&
      ( new Date(session.dateDebut) < new Date(session.dateFin) )
    );
  }

}
