import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  Review:any = [];
  Numbers:any = [0,1,2,3,4,5,6,7,8,9,10];
  submitted = false;
  reviewForm: FormGroup;
  selectedOption: string;
  reviewProfile: any = ['nota', 'descricao', 'game_id'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.readReviews(id);
    this.mainForm(id);
  }

  ngOnInit() { }
  mainForm(id) {
    this.reviewForm = this.fb.group({
      nota: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      game_id:id,
    });
  }
  readReviews(id){
    this.apiService.getReviews(id).subscribe((data) => {
     this.Review = data;
     console.log(this.Review);
    })
  }

  // Getter to access form control
  get myForm() {
      return this.reviewForm.controls;
    }

  onSelected(selectedConsole: string){
      console.log(selectedConsole);
        this.selectedOption = selectedConsole;
      }
  
  onSubmit(){
    console.log(this.reviewForm.value);
    this.submitted = true;
    if (!this.reviewForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      return this.apiService.createReview(this.reviewForm.value).subscribe({
        complete: () => {
          console.log('Review successfully created!')
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
