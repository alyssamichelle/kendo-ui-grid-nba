import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayersGridComponent } from './components/players-grid/players-grid.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayersGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nba';
}
