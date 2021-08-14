import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {IParent} from "../classes/interface-json/interface-parent";

@Component({
  selector: 'app-page-parent-tableau',
  templateUrl: './page-parent-tableau.component.html',
  styleUrls: ['./page-parent-tableau.component.scss']
})
export class PageParentTableauComponent implements OnInit{

  parent!: IParent;

  constructor(public authService: AuthService, private router: Router) {
    if(!this.authService.isAuth){
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {
    this.parent = this.authService.parent;
  }

}


