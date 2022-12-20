import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  Review:any = [];

  constructor(private apiService: ApiService, private actRoute: ActivatedRoute) {
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
