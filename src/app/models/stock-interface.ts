export class StockInterface {
  public symbol: string;
  public lastTradePriceOnly: number;
  public change: number;
  public changeInPercent: number;
  constructor(){
    this.symbol = '';
    this.lastTradePriceOnly = 0;
    this.change = 0;
    this.changeInPercent = 0;
  }
}
