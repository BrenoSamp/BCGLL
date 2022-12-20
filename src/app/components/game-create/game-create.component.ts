import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {
  submitted = false;
  gameForm: FormGroup;
  GameProfile: any = ['nome', 'resumo', 'genero', 'image', 'console_id', 'desenvolvedor'];
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
    this.gameForm = this.fb.group({
      nome: ['', [Validators.required]],
      resumo: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      image: ['', [Validators.required]],
      desenvolvedor: ['', [Validators.required]],
      avaliacao: [0],
      console_id: ['', [Validators.required]],
    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.gameForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.gameForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.gameForm.valid) {
      console.log('Please provide all the required values!');
      console.log(this.gameForm.value);
      return false;
    } else {
      return this.apiService.createGame(this.gameForm.value).subscribe({
        complete: () => {
          console.log('Game successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/lista-consoles'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}