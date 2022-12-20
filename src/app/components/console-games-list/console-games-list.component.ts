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
  name: string;
  dev: string;
  gen: string;
  consoleName: string;

  constructor(private apiService: ApiService, private actRoute: ActivatedRoute) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.consoleName = id;
    this.readGames(id);

  }
  ngOnInit() { }
  readGames(id) {
    this.apiService.getGames(id).subscribe((data) => {
      this.Games = data;
    })
  }
  onSubmitName(event: any) {
    this.Games = [];
    let nome = event.target.nome.value;
    this.apiService.getGamesByName(this.consoleName, nome).subscribe((data) => {
      this.Games = data;
    })
    event.target.nome.value = '';
  }

  onSubmitDev(event: any) {
    this.Games = [];
    let dev = event.target.dev.value;
    this.apiService.getGamesByDev(this.consoleName, dev).subscribe((data) => {
      this.Games = data;
    })
    event.target.dev.value = '';
  }

  onSubmitGen(event: any) {
    this.Games = [];
    let genero = event.target.gen.value;
    this.apiService.getGamesByGen(this.consoleName, genero).subscribe((data) => {
      this.Games = data;
    })
    event.target.gen.value = '';
  }
}
