import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;
  GameProfile: any = ['nome', 'email', 'senha'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.loginForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.loginForm.valid) {
      console.log('Please provide all the required values!');
      console.log(this.loginForm.value);
      return false;
    } else {
      return this.apiService.userLogin(this.loginForm.value).subscribe({
        complete: () => {
          console.log('Usuário successfully Logado!'),
            this.ngZone.run(() => this.router.navigateByUrl('/lista-consoles'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}