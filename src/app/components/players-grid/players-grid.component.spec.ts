import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersGridComponent } from './players-grid.component';

describe('PlayersGridComponent', () => {
  let component: PlayersGridComponent;
  let fixture: ComponentFixture<PlayersGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayersGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
