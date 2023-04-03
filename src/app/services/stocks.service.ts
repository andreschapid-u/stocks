import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockInterface } from '../models/stock-interface';
import { Observable } from 'rxjs';

let stocks : Array<string> = ['AAPL', 'GOOG', 'META', 'AMZN', 'TWTR'];
let service : string = 'https://angular2-in-action-api.herokuapp.com';



@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  get(){
    return stocks.slice();
  }

  add(stock: string){
    stocks.push(stock);
  }

  remove(stock: string){
    stocks.splice(stocks.indexOf(stock), 1);
  }

  load(symbols: Array<string>){
    if (symbols){
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
    return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot');
  }
}
