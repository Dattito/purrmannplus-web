import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  loading = false;

  constructor(private alert: AlertService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      staySignedIn: new FormControl(true),
    });
  }

  onSubmit() {
    console.log(this.loginForm);
    this.alert.clear();
    this.submitted = true;

    if (this.loginForm.invalid) return;

    this.loading = true;
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
