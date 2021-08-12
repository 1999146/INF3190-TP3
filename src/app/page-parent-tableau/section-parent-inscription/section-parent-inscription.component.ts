import { Component, OnInit } from '@angular/core';
import { Session } from '../../classes/programme/session';
import { Enfant } from '../../classes/fiche-parent/enfant';
import { Parent } from '../../classes/fiche-parent/parent';
import { GabaritProgramme } from '../../classes/programme/gabarit-programme';
import { Semaine } from '../../classes/programme/semaine';
import { Programme } from '../../classes/programme/programme';
import {AuthService} from "../../services/auth.service";
import { ModuleFicheParent } from 'src/app/classes/module-json/module-fiche-parent';

@Component({
  selector: 'app-section-parent-inscription',
  templateUrl: './section-parent-inscription.component.html',
  styleUrls: ['./section-parent-inscription.component.scss']
})
export class SectionParentInscriptionComponent implements OnInit {

  dateMaintenant: Date = new Date();
  gabaritProgrammes: Array<GabaritProgramme> = new Array<GabaritProgramme>();
  sessionActuelle: Session;
  sessions: Array<Session> = new Array<Session>();

  parent: ModuleFicheParent.IParent;
  ficheParent: ModuleFicheParent.IFicheParent;

  constructor(public authService: AuthService) {
    this.ficheParent = authService.ficheParent;
    this.parent = this.ficheParent.parent;



    // Gabarit Programme

    this.gabaritProgrammes.push(new GabaritProgramme(
      "G0",
      "Classique",
      "Le classique comprend chaque jour un bloc d’activités de type sportif et un autre avec une activité de type art et une activité de type science."
    ));

    this.gabaritProgrammes.push(new GabaritProgramme(
      "G1",
      "Enfant actif",
      "Le programme athlétique est un camp de jour sportif intensif pour les enfants très actifs. Il comprend au moins quatre activités quotidiennes dont le basketball, le tennis, le soccer, le ballon chasseur, le baseball, etc."
    ));

    this.gabaritProgrammes.push(new GabaritProgramme(
      "G2",
      "Arts et sciences",
      "Le programme arts et science comprend plusieurs activités d'arts culinaires, d'arts visuels, d'arts plastiques, de chimie, de biologie et de physique. Il ne possède pas d’activité physique, cependant une activité matinale est réservée pour pratiquer le yoga ou jouer à un jeu de course comme le ballon chasseur."
    ));


    // Session

    this.sessionActuelle = new Session(
      "S21",
      "Session 2021",
      "Session plein de plaisir",
      "2021-04-01",
      "2021-08-01"
    );

    this.sessions.push(this.sessionActuelle);
    this.sessions.push(new Session(
      "S20",
      "Session 2020",
      "Session plein de plaisir",
      "2020-04-01",
      "2020-08-01"
    ));

    for(let i = 1; i <= 15; i++) {
      let semaineTmp: Semaine = new Semaine(
        "S" + i,
        i
      );

      // for(let j = 1; j <= 3; j++) {
      //   semaineTmp.ajouterProgramme( new Programme (
      //     "P" + i + "-" + j,
      //     this.gabaritProgrammes[j-1],
      //     "Nos " + j + " amis.",
      //     10 + (i * j)
      //   ));
      // }

      this.sessionActuelle.semaines.push(semaineTmp);
    }

  }

  ngOnInit(): void {
  }

  estEnCours(date: Date): string {
    if ( date > this.dateMaintenant ) return "week-ongoing";
    else return "week-passed";
  }

  exportJson() {
    const data = JSON.stringify(this.gabaritProgrammes);
    console.log(data);
  }


}
