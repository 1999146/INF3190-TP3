import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {IEnfant} from "../../../classes/interface-json/interface-parent";

@Component({
  selector: 'app-modal-ajouter-enfant',
  templateUrl: './modal-ajouter-enfant.component.html',
  styleUrls: ['./modal-ajouter-enfant.component.scss']
})
export class ModalAjouterEnfantComponent implements OnInit {

  @Input() enfants: IEnfant[] = [];

  constructor() { }

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
    this.enfants.push({
      id: "randomId",
      nom: form.value['nomEnfant'],
      prenom: form.value['prenomEnfant'],
      dateNaissance: form.value['dateNaissanceEnfant'],
      urlPhoto: form.value['photoEnfant'],
      note: ""
    });
  }
}
