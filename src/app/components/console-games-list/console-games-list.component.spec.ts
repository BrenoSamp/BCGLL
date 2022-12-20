import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleGamesListComponent } from './console-games-list.component';

describe('ConsoleGamesListComponent', () => {
  let component: ConsoleGamesListComponent;
  let fixture: ComponentFixture<ConsoleGamesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleGamesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsoleGamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
