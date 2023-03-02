import { Component } from '@angular/core';
import { Coin } from 'src/app/models/coin';

@Component({
  selector: 'app-table-coins',
  templateUrl: './table-coins.component.html',
  styleUrls: ['./table-coins.component.css']
})
export class TableCoinsComponent {
  coins: Coin[] = [];
}
