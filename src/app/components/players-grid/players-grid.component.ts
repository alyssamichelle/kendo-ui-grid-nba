import { Component, inject } from '@angular/core';
import { CellClickEvent, CellCloseEvent, GridComponent, GridModule } from '@progress/kendo-angular-grid';
import { NbaPlayer, players } from '../../../../src/app/mock';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-players-grid',
  standalone: true,
  imports: [GridModule],
  template: `
   <kendo-grid [data]="nbaPlayers" #playerGrid (cellClick)="cellEditClick($event)" (cellClose)="cellCloseClick($event, playerGrid)"> 
      <kendo-grid-column title="ID" field="id"> </kendo-grid-column> 
      <kendo-grid-column title="Name" field="name" editor="text"> 
      </kendo-grid-column> 
      <kendo-grid-column field="points" editor="numeric"> </kendo-grid-column> 
      <kendo-grid-column field="assist" editor="numeric"> </kendo-grid-column> 
      <kendo-grid-column field="rebounds" editor="numeric"> </kendo-grid-column> 
      <kendo-grid-column field="height" editor="numeric"> </kendo-grid-column> 
      <kendo-grid-column field="captain" editor="boolean"> </kendo-grid-column> 
      <kendo-grid-column field="startDate" editor="date"> </kendo-grid-column> 
  </kendo-grid> 
  `,
  styleUrl: './players-grid.component.css'
})
export class PlayersGridComponent {
  nbaPlayers = players;
  formBuilder = inject(FormBuilder);

  private createFormGroup(player: NbaPlayer): any { 
    return this.formBuilder.group({ 
      id: player.id, 
      name: [player.name, Validators.required], 
      points: [player.points, Validators.min(1)], 
      assist: player.assist, 
      rebounds: player.rebounds, 
      height: player.height, 
      captain: player.captain, 
      startDate: player.startDate, 
    }); 
  } 

  cellEditClick(cellEvent: CellClickEvent) { 
    cellEvent.sender.editCell( 
      cellEvent.rowIndex, 
      cellEvent.columnIndex, 
      this.createFormGroup(cellEvent.dataItem) 
    ); 
  } 

  private updatePlayer(player: NbaPlayer) { 
    const playerIndex = this.nbaPlayers.findIndex((p) => p.id === player.id); 
    this.nbaPlayers[playerIndex] = player; 
  } 

  cellCloseClick(cellEvent: CellCloseEvent, playerGrid: GridComponent) { 
      const { value, valid } = cellEvent.formGroup; 
    if (valid) { 
      this.updatePlayer(value); 
      playerGrid.closeCell(); 
    } 
  } 
}
