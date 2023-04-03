import { Component, Input, OnInit } from '@angular/core';
import { StockInterface } from '../../models/stock-interface';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input("stock")  stock: StockInterface= new StockInterface();
  constructor() { }
  ngOnInit() {
    console.log('ngOnInit Summary', this.stock);

  }

  isPositive(): boolean {
    return this.stock && this.stock.change > 0;
  }

  isNegative(): boolean {
    return this.stock && this.stock.change < 0;
  }
}
