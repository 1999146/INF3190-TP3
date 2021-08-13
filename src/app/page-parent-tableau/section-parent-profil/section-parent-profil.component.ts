import { Component, OnInit } from '@angular/core';
import { IParent } from 'src/app/classes/module-json/module-fiche-parent';
import { IFicheParent } from 'src/app/classes/module-json/module-fiche-parent';
import { Enfant } from '../../classes/fiche-parent/enfant';
import { Parent } from '../../classes/fiche-parent/parent';
import { AuthService } from "../../services/auth.service";


@Component({
  selector: 'app-section-parent-profil',
  templateUrl: './section-parent-profil.component.html',
  styleUrls: ['./section-parent-profil.component.scss']
})
export class SectionParentProfilComponent implements OnInit {

  parent!: IParent;
  ficheParent!: IFicheParent;

  constructor(public authService: AuthService) {
    this.ficheParent = authService.ficheParent;
    this.parent = this.ficheParent.parent;

    // this.parent1.enfants.push(new Enfant(
    //   "3",
    //   "Simpson",
    //   "Maggie",
    //   "1999-05-12",
    //   "../../assets/img/profil.png",
    //   "")
    // );

  }

  ngOnInit(): void {
  }

  // exportJson() {
  //   // console.log(parent);
  //   const data = JSON.stringify(this.fichesParents);
  //   console.log(data);
  // }

}
