import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { PageContactComponent } from './page-contact/page-contact.component';
import { AuthService } from "./services/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PageDescriptionProgrammesComponent } from './page-description-programmes/page-description-programmes.component';
import { PageInscriptionParentComponent } from './page-inscription-parent/page-inscription-parent.component';
import { PageParentTableauComponent } from './page-parent-tableau/page-parent-tableau.component';
import { SectionParentProfilComponent } from './page-parent-tableau/section-parent-profil/section-parent-profil.component';
import { SectionParentInscriptionComponent } from './page-parent-tableau/section-parent-inscription/section-parent-inscription.component';
import { TableauAdminComponent } from './tableau-admin/tableau-admin.component';
import { TableauAdminModalComponent } from './tableau-admin-modal/tableau-admin-modal.component';
import { ModalModifierProfilComponent } from "./page-parent-tableau/section-parent-profil/modal-modifier-profil/modal-modifier-profil.component";
import { LoginFormComponent } from './header/login-form/login-form.component';
import { SectionEnfantsAChargeComponent } from './page-parent-tableau/section-enfants-a-charge/section-enfants-a-charge.component';
import { FicheEnfantComponent } from './page-parent-tableau/section-enfants-a-charge/fiche-enfant/fiche-enfant.component';
import { ModalAjouterEnfantComponent } from './page-parent-tableau/section-enfants-a-charge/modal-ajouter-enfant/modal-ajouter-enfant.component';
import { PageGestionProgrammeComponent } from './page-gestion-programme/page-gestion-programme.component';
import { SectionGestionSessionComponent } from './page-gestion-programme/section-gestion-session/section-gestion-session.component';
import { SectionGestionProgrammeComponent } from './page-gestion-programme/section-gestion-programme/section-gestion-programme.component';
import { SectionGestionBlocComponent } from './page-gestion-programme/section-gestion-bloc/section-gestion-bloc.component';
import { SectionGestionTypeComponent } from './page-gestion-programme/section-gestion-type/section-gestion-type.component';
import { SectionGestionActiviteComponent } from './page-gestion-programme/section-gestion-activite/section-gestion-activite.component';
import { ModalModifierEnfantComponent } from "./page-parent-tableau/section-enfants-a-charge/fiche-enfant/modal-modifier-enfant/modal-modifier-enfant.component";
import { ModalCreerActiviteComponent } from './page-gestion-programme/section-gestion-activite/modal-creer-activite/modal-creer-activite.component';
import { ModalCreerTypeComponent } from './page-gestion-programme/section-gestion-type/modal-creer-type/modal-creer-type.component';
import { ModalCreerBlocComponent } from './page-gestion-programme/section-gestion-bloc/modal-creer-bloc/modal-creer-bloc.component';
import { ModalCreerProgrammeComponent } from './page-gestion-programme/section-gestion-programme/modal-creer-programme/modal-creer-programme.component';
import { ModalCreerSessionComponent } from './page-gestion-programme/section-gestion-session/modal-creer-session/modal-creer-session.component';
import { HttpClientModule} from "@angular/common/http";
// import { NotFoundComponent } from './not-found/not-found.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component:  PageAccueilComponent},
  { path: 'descriptionProgrammes', component: PageDescriptionProgrammesComponent},
  { path: 'contact', component:  PageContactComponent},
  { path: 'inscriptionParent', component:  PageInscriptionParentComponent},
  { path: 'tableauBordParent', component:  PageParentTableauComponent},
  { path: 'tableauAdmin', component: TableauAdminComponent},
  { path: 'gestionProgramme', component: PageGestionProgrammeComponent},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404'}
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
    TableauAdminComponent,
    TableauAdminModalComponent,
    ModalModifierProfilComponent,
    LoginFormComponent,
    SectionEnfantsAChargeComponent,
    FicheEnfantComponent,
    ModalAjouterEnfantComponent,
    PageGestionProgrammeComponent,
    SectionGestionSessionComponent,
    SectionGestionProgrammeComponent,
    SectionGestionBlocComponent,
    SectionGestionTypeComponent,
    SectionGestionActiviteComponent,
    ModalCreerActiviteComponent,
    ModalCreerTypeComponent,
    ModalCreerBlocComponent,
    ModalCreerProgrammeComponent,
    ModalCreerSessionComponent,
    ModalModifierEnfantComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
