import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  Review:any = [];
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
  }

  ngOnInit() {
  }
  readReviews(id){
    this.apiService.getReviews(id).subscribe((data) => {
     this.Review = data;
     console.log(this.Review);
    })
  }
}
