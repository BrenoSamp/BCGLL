import { ActivatedRoute } from '@angular/router';
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
  Numbers:any = [{number: 1}, {number: 2}, {number: 3}, {number: 4}, {number: 5},
  {number: 6}, {number: 7}, {number: 8}, {number: 9}, {number: 10}];
  tempId: any;
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
    this.tempId = id;
    this.readReviews(id);
    this.mainForm(id);
  }
  
  ngOnInit() { }
  mainForm(id) {
    this.reviewForm = this.fb.group({
      nota: this.selectedOption,
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
          this.readReviews(this.tempId);
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
