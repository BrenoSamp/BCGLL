import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css'],
})

export class ReviewCreateComponent implements OnInit {
  submitted = false;
  reviewForm: FormGroup;
  ReviewProfile: any = ['nota', 'description', 'nome'];
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
    this.reviewForm = this.fb.group({
      nota: ['', [Validators.required]],
      nome: [
        '',
        [
          Validators.required

        ],
      ],
      description: ['', [Validators.required]],
    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.reviewForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.reviewForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.reviewForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      return this.apiService.createReview(this.reviewForm.value).subscribe({
        complete: () => {
          console.log('Review successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/reviews-list'));
        },
        error: (e) => {
          console.log('Error creating review!');
          console.log(e);
        },
      });
    }
  }
}