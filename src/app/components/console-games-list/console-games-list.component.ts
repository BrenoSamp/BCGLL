import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-console-games-list',
  templateUrl: './console-games-list.component.html',
  styleUrls: ['./console-games-list.component.css']
})
export class ConsoleGamesListComponent implements OnInit {

  Games: any = [];
  constructor(private apiService: ApiService, private actRoute: ActivatedRoute) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.readGames(id);
  }
  ngOnInit() { }
  readGames(id) {
    this.apiService.getGames(id).subscribe((data) => {
      this.Games = data;
    })
  }

}
