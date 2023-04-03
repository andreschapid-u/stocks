import { Component, OnInit } from '@angular/core';
import { StockInterface } from './models/stock-interface';
import { StocksService } from './services/stocks.service';
import { Observable } from 'rxjs';
import { SummaryComponent } from './components/summary/summary.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stocks';
  stocks: Array<StockInterface>=[];

  constructor(private stockService: StocksService){

  }
  ngOnInit(){
    console.log('ngOnInit');
    this.stockService.load(['AAPL']).subscribe(stocks => {
      this.stocks = stocks;
      console.log('stocks', stocks);
    },
    error => {
      console.log('error', error);
      this.stocks.push({
        symbol: 'GOOG',
        lastTradePriceOnly: 800,
        change: 2,
        changeInPercent: 0.3
      });
      this.stocks.push({
        symbol: 'META',
        lastTradePriceOnly: 800,
        change: -2,
        changeInPercent: 0.3
      });
      this.stocks.push({
        symbol: 'AMZN',
        lastTradePriceOnly: 800,
        change: 0,
        changeInPercent: 0.3
      });

      console.log('stocks', this.stocks);
    });
  }
}
