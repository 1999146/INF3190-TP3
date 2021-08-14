import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  erreur!: string;
  loginForm!: FormGroup;

  constructor(public authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
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

  onSubmitForm() {
    const formValue = this.loginForm.value;
    this.authService.signIn(formValue.username, formValue.password);

    if (this.authService.isAuth && !this.authService.isAdmin) {
      this.router.navigate(['tableauBordParent']);
    } else if (this.authService.isAuth && this.authService.isAdmin) {
      this.router.navigate(['']);
    } else {
      this.password.markAsPristine();
      this.username.markAsPristine();
      this.erreur = "Combinaison de Nom d'utilisateur et de Mot de passe invalide.";
    }
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['']);
    this.initForm();
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  get username() {
    return this.loginForm.controls['username'];
  }

}
