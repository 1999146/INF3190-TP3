import { Component, OnInit } from '@angular/core';
import { IParent } from 'src/app/classes/interface-json/interface-parent';
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
  }

}
