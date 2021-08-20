import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { IActivite, IGabaritProgramme, ISession, ITypeActivite } from '../classes/interface-json/interface-session';

@Component({
  selector: 'app-page-gestion-programme',
  templateUrl: './page-gestion-programme.component.html',
  styleUrls: ['./page-gestion-programme.component.scss']
})
export class PageGestionProgrammeComponent implements OnInit {

  sessions: ISession[] | undefined = undefined;
  gabaritProgrammes!: IGabaritProgramme[];
  typeActivites!: ITypeActivite[];
  activites!: IActivite[];

  constructor(public authService: AuthService, private router: Router) {
    if (!authService.isAuth || !authService.isAdmin) this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.sessions = this.authService.sessions;
    this.gabaritProgrammes = this.authService.gabaritProgrammes;
    this.typeActivites = this.authService.typeActivites;
    this.activites = this.authService.activites;
  }

}
