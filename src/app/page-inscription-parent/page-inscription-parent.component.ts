import {Component, OnInit} from '@angular/core';
import {AbstractControl, Form, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-page-inscription-parent',
  templateUrl: './page-inscription-parent.component.html',
  styleUrls: ['./page-inscription-parent.component.css']
})
export class PageInscriptionParentComponent implements OnInit {
  formInscription!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formInscription = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      ddn: ['', [
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
    })
  }

  inscription(): void {
    console.log("inscription tentee");
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

  get email() {
    return this.formInscription.controls['email'];
  }

  get ddn() {
    return this.formInscription.controls['ddn'];
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
