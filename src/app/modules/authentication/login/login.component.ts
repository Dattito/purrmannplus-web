import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/core/services/alert.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  loading = false;

  constructor(private alert: AlertService, private auth: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      staySignedIn: new FormControl(true),
    });
  }

  onSubmit() {
    this.alert.clear();
    this.submitted = true;

    if (this.loginForm.invalid) return;

    this.loading = true;

    this.auth.login(
      this.loginForm.get('username')?.value,
      this.loginForm.get('password')?.value,
      this.loginForm.get('stayLoggedIn')?.value
    ).pipe(first()).subscribe(
      (res) => {
        this.loading = false;
        this.alert.success('Erfolgreich eingeloggt!');
      },
      (err) => {
        this.loading = false;

        if (err.status === 401) {
          this.alert.error('Falscher Benutzername / Kennwort');
        } else {
          this.alert.error('Etwas ist schiefgelaufen.');
          console.log(err);
        }
      }
    );
  }

  /* phoneNumber(control: FormControl): { [s: string]: boolean } | null {
    if (control.value.length < 10) {
      return {
        phoneNumber: true
      };
    }
    return null;
  } */
}
