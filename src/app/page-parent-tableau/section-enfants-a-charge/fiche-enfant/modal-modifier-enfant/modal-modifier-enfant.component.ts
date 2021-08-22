import {Component, Input, OnInit} from '@angular/core';
import {IEnfant} from "../../../../classes/interface-json/interface-parent";
import {NgForm} from "@angular/forms";
import {MessageService} from "../../../../services/message.service";

@Component({
  selector: 'app-modal-modifier-enfant',
  templateUrl: './modal-modifier-enfant.component.html',
  styleUrls: ['./modal-modifier-enfant.component.scss']
})
export class ModalModifierEnfantComponent implements OnInit {

  @Input() enfant!: IEnfant;

  constructor(private MessageService:MessageService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.MessageService.setMsgGlobal("Votre enfant a bien été modifié");
  }

}
