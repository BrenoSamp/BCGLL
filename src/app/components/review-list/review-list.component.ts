import { Review } from './../../model/review';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  Review:any = [];

  constructor(private apiService: ApiService) { 
    this.readEmployee();
  }
  ngOnInit() {
  }
  readEmployee(){
    this.apiService.getReviews().subscribe((data) => {
     this.Review = data;
     console.log(this.Review);
    })    
  }
}
