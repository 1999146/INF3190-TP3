import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  username!: string;
  password!: string;
  erreur!: string;

  constructor(public authService: AuthService, private router: Router) {
  }

  onSignIn() {
    this.authService.signIn(this.username, this.password);

    if (this.authService.isAuth && !this.authService.isAdmin) {
      this.router.navigate(['tableauBordParent']);
    } else if (this.authService.isAuth && this.authService.isAdmin) {
      this.router.navigate(['']);
    } else {
      this.erreur = "Authentification échoué";
    }
  }

  onSignOut() {
    this.username = "";
    this.password = "";
    this.erreur = "";
    this.authService.signOut();
    this.router.navigate(['']);
  }

}
