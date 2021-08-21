import { Component, Input, OnInit } from '@angular/core';
import { IGabaritProgramme, IHoraire, IHorairePrograme, IProgramme, ISemaine, ISession } from 'src/app/classes/interface-json/interface-session';
import { Horaire, HorairePrograme } from 'src/app/classes/session';
import { Join } from 'src/app/classes/methode-join';

@Component({
  selector: 'app-section-gestion-programme',
  templateUrl: './section-gestion-programme.component.html',
  styleUrls: ['./section-gestion-programme.component.scss']
})
export class SectionGestionProgrammeComponent implements OnInit {

  @Input() sessions!: ISession[];
  @Input() programmes!: IProgramme[];
  @Input() horrairesProgrammes!: IHorairePrograme[];
  @Input() gabaritProgrammes!: IGabaritProgramme[];

  constructor() { 
    // this.horraireProgrammes.push(
    //   new HorrairePrograme(
    //     "P0_S21", [
    //       new Horraire("4531818738713327", 1, 2), 
    //       new Horraire("7129264949321758", 2, 2), 
    //       new Horraire("2175904346409182", 3, 2), 
    //       new Horraire("7731215965469501", 4, 2), 
    //     ]
    //   )
    // );
  }

  ngOnInit(): void {
  }

  getNomGabaritProgrammeById(idGabaritProgramme: string): string {
    let gabaritProgramme: IGabaritProgramme | undefined = Join.getGabaritProgrammeById(this.gabaritProgrammes, idGabaritProgramme);
    if (gabaritProgramme != undefined) return gabaritProgramme.titre;
    return "undefined";
  }

  getDescriptionGabaritProgrammeById(idGabaritProgramme: string): string {
    let gabaritProgramme: IGabaritProgramme | undefined = Join.getGabaritProgrammeById(this.gabaritProgrammes, idGabaritProgramme);
    if (gabaritProgramme != undefined) return gabaritProgramme.description;
    return "undefined";
  }

  getNomSession(programme: IProgramme): string {
    let session = Join.getSessionDuProgramme(this.sessions, programme.id);
    return (session != undefined)? session.nom : "undefined";
  }

  getSemaines(programme: IProgramme): ISemaine[] {
    return Join.getSessionsDuProgramme(this.sessions, programme.id);
  }

  getHoraire(programme: IProgramme): IHoraire[] {
    let horrairePrograme = Join.getHoraireProgrammeById(this.horrairesProgrammes, programme.id);
    return (horrairePrograme != undefined)? horrairePrograme.horraires : [];
  }

}
