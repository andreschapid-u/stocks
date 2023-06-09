import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { StocksService } from './services/stocks.service';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
