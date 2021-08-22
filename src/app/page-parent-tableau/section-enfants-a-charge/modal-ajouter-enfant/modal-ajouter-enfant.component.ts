import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {IEnfant} from "../../../classes/interface-json/interface-parent";
import {MessageService} from "../../../services/message.service";

@Component({
  selector: 'app-modal-ajouter-enfant',
  templateUrl: './modal-ajouter-enfant.component.html',
  styleUrls: ['./modal-ajouter-enfant.component.scss']
})
export class ModalAjouterEnfantComponent implements OnInit {

  @Input() enfants: IEnfant[] = [];
  fileToUpload: File | null = null;

  constructor(private MessageService:MessageService) {
  }

  ngOnInit(): void {
  }

  /**
   *Charger la photo de profil
   **/
  onLoadFile(event: any): void {
    this.fileToUpload = event.target.files.item(0);
    let image = document.getElementById(event.target.id + "Img");
    // @ts-ignore
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  onSubmit(form: NgForm) {
    this.enfants.push({
      id: 'enfantPhoto' + this.enfants.length + 1,
      nom: form.value['nomEnfant'],
      prenom: form.value['prenomEnfant'],
      dateNaissance: form.value['dateNaissanceEnfant'],
      urlPhoto: 'assets/img/profil.png',
      note: ""
    });
    this.MessageService.setMsgGlobal("Votre enfant a bien été ajouté");
  }
}
