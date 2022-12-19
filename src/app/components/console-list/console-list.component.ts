import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './console-list.component.html',
  styleUrls: ['./console-list.component.css']
})
export class ConsoleListComponent implements OnInit {
  Consoles: any = [];
  submitted = false;
  selectedOption: string;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.readConsole();
  }

  ngOnInit(): void {
  }

  readConsole() {
    this.apiService.getConsoles().subscribe((data) => {
      this.Consoles = data;
    })
  }

  onSelected(selectedConsole: string){
  console.log(selectedConsole);
    this.selectedOption = selectedConsole;
  }
  onClick(event: Event) {
    this.ngZone.run(() => this.router.navigateByUrl('/list-most-rated/' + this.selectedOption));
  }

  onSubmit() {
    this.submitted = true;
    if (!this.Consoles.valid) {
      return false;
    } else {
      console.log()
      if (window.confirm('Are you sure?')) {

      }
    }
  }
}
