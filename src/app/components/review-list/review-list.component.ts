import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  
  Review:any = [];
  constructor(private apiService: ApiService) { 
    this.readReview("_id");
  }
  ngOnInit() {}
  readReview(id){
    this.apiService.getReviews(id).subscribe((data) => {
     this.Review = data;
    })    
  }
  removeReview(review, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteReview(review._id).subscribe((data) => {
          this.Review.splice(index, 1);
        }
      )    
    }
  }

}
