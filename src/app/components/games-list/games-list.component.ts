import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  Game:any = [];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
  ) {}
  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    console.log('Valor do id'+ id);
    this.readGames(id);
   }
  readGames(id){
    this.apiService.getGames(id).subscribe((data) => {
     this.Game = data;
    })
  }
}
