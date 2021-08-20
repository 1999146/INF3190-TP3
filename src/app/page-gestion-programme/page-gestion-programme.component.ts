import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ISession } from '../classes/interface-json/interface-session';

@Component({
  selector: 'app-page-gestion-programme',
  templateUrl: './page-gestion-programme.component.html',
  styleUrls: ['./page-gestion-programme.component.scss']
})
export class PageGestionProgrammeComponent implements OnInit {

  sessions: ISession[] | undefined = undefined;

  constructor(public authService: AuthService, private router: Router) {
    if (!authService.isAuth || !authService.isAdmin) this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.sessions = this.authService.sessions;
  }

}
