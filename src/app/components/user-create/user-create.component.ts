import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  submitted = false;
  userForm: FormGroup;
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
    this.userForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.userForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.userForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.userForm.valid) {
      console.log('Please provide all the required values!');
      console.log(this.userForm.value);
      return false;
    } else {
      return this.apiService.createUser(this.userForm.value).subscribe({
        complete: () => {
          console.log('Usuário successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/game-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
