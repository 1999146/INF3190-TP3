import { Component, OnInit } from '@angular/core';
import { IParent } from 'src/app/classes/interface-json/interface-parent';
import { Parent, Enfant } from '../../classes/parent';
import { AuthService } from "../../services/auth.service";


@Component({
  selector: 'app-section-parent-profil',
  templateUrl: './section-parent-profil.component.html',
  styleUrls: ['./section-parent-profil.component.scss']
})
export class SectionParentProfilComponent implements OnInit {

  parent!: IParent;

  constructor(public authService: AuthService) {

  }

  ngOnInit(): void {
    this.parent = this.authService.parent;

    // this.parent.enfants.push(new Enfant(
    //   "3",
    //   "Simpson",
    //   "Maggie",
    //   "1999-05-12",
    //   "../../assets/img/profil.png",
    //   "")
    // );
  }

  // exportJson() {
  //   // console.log(parent);
  //   const data = JSON.stringify(this.fichesParents);
  //   console.log(data);
  // }

}
