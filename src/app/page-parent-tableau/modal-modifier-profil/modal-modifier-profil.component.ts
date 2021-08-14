import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-modal-modifier-profil',
  templateUrl: './modal-modifier-profil.component.html',
  styleUrls: ['./modal-modifier-profil.component.scss']
})
export class ModalModifierProfilComponent implements OnInit {

  @Input() parent: any;

  constructor() {

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

}
