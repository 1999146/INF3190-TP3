import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IActivite, ITypeActivite } from 'src/app/classes/interface-json/interface-session';
import { Activite } from 'src/app/classes/session';
import {MessageService} from "../../../services/message.service";

@Component({
  selector: 'app-modal-creer-activite',
  templateUrl: './modal-creer-activite.component.html',
  styleUrls: ['./modal-creer-activite.component.scss']
})
export class ModalCreerActiviteComponent implements OnInit {

  @Input() typeActivites!: ITypeActivite[];
  @Input() activites!: IActivite[];

  constructor(private MessageService:MessageService) { }

  ngOnInit(): void {
  }

  ajouterActivite(f: NgForm) {
    let activite = f.value as IActivite;
    if (this.valeurRemplies(activite)) {
      let newActivite = new Activite(
        activite.nom,
        activite.idTypeActivite
      );
      this.activites.unshift(newActivite);
    }
    this.MessageService.setMsgGlobal("Activité ajouté avec succès!");
  }

  valeurRemplies(activite: any): boolean {
    return ( activite.nom != "" && activite.idTypeActivite != "" );
  }

}
