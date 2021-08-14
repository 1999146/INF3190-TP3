import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import {RouterModule, Routes} from '@angular/router';
import { PageContactComponent } from './page-contact/page-contact.component';
import {AuthService} from "./services/auth.service";
import {FormsModule} from "@angular/forms";
import { PageDescriptionProgrammesComponent } from './page-description-programmes/page-description-programmes.component';
import { PageInscriptionParentComponent } from './page-inscription-parent/page-inscription-parent.component';
import { PageParentTableauComponent } from './page-parent-tableau/page-parent-tableau.component';
import { SectionParentProfilComponent } from './page-parent-tableau/section-parent-profil/section-parent-profil.component';
import { SectionParentInscriptionComponent } from './page-parent-tableau/section-parent-inscription/section-parent-inscription.component';
import {ModalModifierProfilComponent} from "./page-parent-tableau/modal-modifier-profil/modal-modifier-profil.component";

const appRoutes: Routes = [
  { path: '', component:  PageAccueilComponent},
  { path: 'descriptionProgrammes', component: PageDescriptionProgrammesComponent},
  { path: 'contact', component:  PageContactComponent},
  { path: 'inscriptionParent', component:  PageInscriptionParentComponent},
  { path: 'tableauBordParent', component:  PageParentTableauComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        PageAccueilComponent,
        PageContactComponent,
        PageDescriptionProgrammesComponent,
        PageInscriptionParentComponent,
        PageParentTableauComponent,
        SectionParentProfilComponent,
        SectionParentInscriptionComponent,
        ModalModifierProfilComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
