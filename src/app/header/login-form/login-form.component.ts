import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppComponent} from "../../app.component";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  erreur!: string;
  loginForm!: FormGroup;

  constructor(public authService: AuthService, private router: Router, private formBuilder: FormBuilder, private MessageService: MessageService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['',     Validators.required],
      password: ['',     Validators.required],
    })
  }

  onSubmitForm() {
    const formValue = this.loginForm.value;
    this.authService.signIn(formValue.username, formValue.password);

    if (this.authService.isAuth && !this.authService.isAdmin) {
      //Parent
      this.MessageService.setMsgGlobal("Vous êtes maintenant connecté en tant que parent!");
      this.router.navigate(['tableauBordParent']);
    } else if (this.authService.isAuth && this.authService.isAdmin) {
      //Admin
      this.MessageService.setMsgGlobal("Vous êtes maintenant connecté en tant qu'Admin!");
      this.router.navigate(['tableauAdmin']);
    } else {
      //Invalide
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
