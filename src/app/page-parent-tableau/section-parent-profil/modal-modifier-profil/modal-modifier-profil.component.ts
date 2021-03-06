import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {NgForm} from "@angular/forms";
import {IParent} from "../../../classes/interface-json/interface-parent";
import {MessageService} from "../../../services/message.service";

@Component({
  selector: 'app-modal-modifier-profil',
  templateUrl: './modal-modifier-profil.component.html',
  styleUrls: ['./modal-modifier-profil.component.scss']
})
export class ModalModifierProfilComponent implements OnInit {

  @Input() parent!: IParent;

  constructor(private MessageService:MessageService) {

  }

  ngOnInit(): void {
  }

  /**
   *Charger la photo de profil
   **/
  onLoadFile(event: any): void {
    let image = document.getElementById(event.target.id + "Img");
    // @ts-ignore
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  onSubmit(form: NgForm) {
      this.MessageService.setMsgGlobal("Votre profil a bien été modifié");
  }

}
