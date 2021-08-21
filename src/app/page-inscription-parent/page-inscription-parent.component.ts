import {Component, OnInit} from '@angular/core';
import {AbstractControl, Form, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Enfant, Parent} from '../classes/parent';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-inscription-parent',
  templateUrl: './page-inscription-parent.component.html',
  styleUrls: ['./page-inscription-parent.component.css']
})
export class PageInscriptionParentComponent implements OnInit {
  formInscription!: FormGroup;


  constructor(private formBuilder: FormBuilder, private auth: AuthService, private routeur: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formInscription = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      courriel: ['', [
        Validators.required,
        Validators.email
      ]],
      dateNaissance: ['', [
        Validators.required,
        this.estDateFuture()
      ]],
      adresse: [''],
      username: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9]*$/)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/[^a-zA-Z0-9]/)
      ]],
      urlPhoto: '' //updater
    })
  }

  inscription(): void {
    const infosParent = this.formInscription.value;
    let nouveauParent = new Parent(
      infosParent.username,
      infosParent.password,
      infosParent.nom,
      infosParent.prenom,
      infosParent.courriel,
      infosParent.adresse,
      infosParent.dateNaissance,
      infosParent.urlPhoto,
      );
    this.auth.addParent(nouveauParent);
    this.routeur.navigate(['tableauBordParent']);
  }

  estDateFuture() {
    return (control: AbstractControl): ValidationErrors | null => {
      let estDateFuture: boolean = false;
      if (Date.parse(control.value) > Date.now()) {
        estDateFuture = true;
      }
      ;
      return estDateFuture ? {estDateFuture: true} : null;
    };
  }

  /**
   *Charger la photo de profil
   **/
  onLoadFile(event
               :
               any
  ):
    void {
    let image = document.getElementById(event.target.id + "Img");
    // @ts-ignore
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  get prenom() {
    return this.formInscription.controls['prenom'];
  }

  get nom() {
    return this.formInscription.controls['nom'];
  }

  get courriel() {
    return this.formInscription.controls['courriel'];
  }

  get dateNaissance() {
    return this.formInscription.controls['dateNaissance'];
  }

  get adresse() {
    return this.formInscription.controls['adresse'];
  }

  get username() {
    return this.formInscription.controls['username'];
  }

  get password() {
    return this.formInscription.controls['password'];
  }
}
